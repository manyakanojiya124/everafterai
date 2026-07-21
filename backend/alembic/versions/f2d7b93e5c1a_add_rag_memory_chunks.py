"""add pgvector extension, memory_chunks table, and memory_files.chunk_count

Revision ID: f2d7b93e5c1a
Revises: a1c9e2f4b7d3
Create Date: 2026-07-21 00:00:00.000000

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from pgvector.sqlalchemy import Vector

from app.core.config import settings

revision: str = 'f2d7b93e5c1a'
down_revision: Union[str, Sequence[str], None] = 'a1c9e2f4b7d3'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.execute("CREATE EXTENSION IF NOT EXISTS vector")

    op.add_column(
        'memory_files',
        sa.Column('chunk_count', sa.Integer(), server_default='0', nullable=False),
    )

    op.create_table(
        'memory_chunks',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('memory_person_id', sa.Integer(), nullable=False),
        sa.Column('memory_file_id', sa.Integer(), nullable=True),
        sa.Column('source_type', sa.String(length=30), nullable=False),
        sa.Column('source_label', sa.String(length=255), nullable=True),
        sa.Column('chunk_index', sa.Integer(), nullable=False, server_default='0'),
        sa.Column('content', sa.Text(), nullable=False),
        sa.Column('embedding', Vector(settings.EMBEDDING_DIMENSIONS), nullable=False),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=True),
        sa.ForeignKeyConstraint(['memory_person_id'], ['memory_people.id'], ondelete='CASCADE'),
        sa.ForeignKeyConstraint(['memory_file_id'], ['memory_files.id'], ondelete='CASCADE'),
        sa.PrimaryKeyConstraint('id'),
    )
    op.create_index(op.f('ix_memory_chunks_id'), 'memory_chunks', ['id'], unique=False)
    op.create_index(op.f('ix_memory_chunks_memory_person_id'), 'memory_chunks', ['memory_person_id'], unique=False)
    op.create_index(op.f('ix_memory_chunks_memory_file_id'), 'memory_chunks', ['memory_file_id'], unique=False)

    # Approximate-nearest-neighbour index for cosine distance. ivfflat needs
    # at least a handful of rows to build well in production; harmless to
    # create empty, Postgres will just use a flat scan until it's populated.
    op.execute(
        "CREATE INDEX ix_memory_chunks_embedding_cosine ON memory_chunks "
        "USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100)"
    )


def downgrade() -> None:
    op.execute("DROP INDEX IF EXISTS ix_memory_chunks_embedding_cosine")
    op.drop_index(op.f('ix_memory_chunks_memory_file_id'), table_name='memory_chunks')
    op.drop_index(op.f('ix_memory_chunks_memory_person_id'), table_name='memory_chunks')
    op.drop_index(op.f('ix_memory_chunks_id'), table_name='memory_chunks')
    op.drop_table('memory_chunks')
    op.drop_column('memory_files', 'chunk_count')
