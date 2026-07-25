"""add voice_references and message_voices tables for voice cloning

Revision ID: b7e4d1a9f6c2
Revises: f2d7b93e5c1a
Create Date: 2026-07-22 00:00:00.000000

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa

revision: str = 'b7e4d1a9f6c2'
down_revision: Union[str, Sequence[str], None] = 'f2d7b93e5c1a'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table(
        'voice_references',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('memory_person_id', sa.Integer(), nullable=False),
        sa.Column('memory_file_id', sa.Integer(), nullable=True),
        sa.Column('source', sa.String(length=30), nullable=False),
        sa.Column('file_path', sa.String(length=1000), nullable=False),
        sa.Column('original_name', sa.String(length=255), nullable=False),
        sa.Column('duration_seconds', sa.Integer(), nullable=True),
        sa.Column('status', sa.String(length=30), nullable=False, server_default='ready'),
        sa.Column('validation_note', sa.Text(), nullable=True),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=True),
        sa.Column('updated_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=True),
        sa.ForeignKeyConstraint(['memory_person_id'], ['memory_people.id'], ondelete='CASCADE'),
        sa.ForeignKeyConstraint(['memory_file_id'], ['memory_files.id'], ondelete='SET NULL'),
        sa.PrimaryKeyConstraint('id'),
        sa.UniqueConstraint('memory_person_id', name='uq_voice_references_memory_person_id'),
    )
    op.create_index(op.f('ix_voice_references_id'), 'voice_references', ['id'], unique=False)
    op.create_index(op.f('ix_voice_references_memory_person_id'), 'voice_references', ['memory_person_id'], unique=False)

    op.create_table(
        'message_voices',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('chat_message_id', sa.Integer(), nullable=False),
        sa.Column('status', sa.String(length=30), nullable=False, server_default='pending'),
        sa.Column('trigger', sa.String(length=30), nullable=False, server_default='on_demand'),
        sa.Column('file_path', sa.String(length=1000), nullable=True),
        sa.Column('duration_seconds', sa.Integer(), nullable=True),
        sa.Column('error', sa.Text(), nullable=True),
        sa.Column('device_used', sa.String(length=20), nullable=True),
        sa.Column('generation_ms', sa.Integer(), nullable=True),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=True),
        sa.Column('updated_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=True),
        sa.ForeignKeyConstraint(['chat_message_id'], ['chat_messages.id'], ondelete='CASCADE'),
        sa.PrimaryKeyConstraint('id'),
        sa.UniqueConstraint('chat_message_id', name='uq_message_voices_chat_message_id'),
    )
    op.create_index(op.f('ix_message_voices_id'), 'message_voices', ['id'], unique=False)
    op.create_index(op.f('ix_message_voices_chat_message_id'), 'message_voices', ['chat_message_id'], unique=False)


def downgrade() -> None:
    op.drop_index(op.f('ix_message_voices_chat_message_id'), table_name='message_voices')
    op.drop_index(op.f('ix_message_voices_id'), table_name='message_voices')
    op.drop_table('message_voices')
    op.drop_index(op.f('ix_voice_references_memory_person_id'), table_name='voice_references')
    op.drop_index(op.f('ix_voice_references_id'), table_name='voice_references')
    op.drop_table('voice_references')
