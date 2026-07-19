"""add memory people tables

Revision ID: 73487f260d69
Revises: ec5dc0ed26ed
Create Date: 2026-07-18 17:08:19.179757

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


revision: str = '73487f260d69'
down_revision: Union[str, Sequence[str], None] = 'ec5dc0ed26ed'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table('memory_people',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('full_name', sa.String(length=200), nullable=False),
    sa.Column('nickname', sa.String(length=100), nullable=True),
    sa.Column('relationship', sa.String(length=100), nullable=False),
    sa.Column('gender', sa.String(length=50), nullable=True),
    sa.Column('birth_date', sa.Date(), nullable=True),
    sa.Column('passing_date', sa.Date(), nullable=True),
    sa.Column('profile_picture', sa.String(length=500), nullable=True),
    sa.Column('occupation', sa.String(length=200), nullable=True),
    sa.Column('country', sa.String(length=120), nullable=True),
    sa.Column('city', sa.String(length=120), nullable=True),
    sa.Column('languages', sa.String(length=250), nullable=True),
    sa.Column('biography', sa.Text(), nullable=True),
    sa.Column('favorite_quote', sa.Text(), nullable=True),
    sa.Column('favorite_food', sa.String(length=150), nullable=True),
    sa.Column('favorite_song', sa.String(length=200), nullable=True),
    sa.Column('favorite_color', sa.String(length=100), nullable=True),
    sa.Column('hobbies', sa.Text(), nullable=True),
    sa.Column('personality_traits', sa.JSON(), nullable=True),
    sa.Column('bond_story', sa.Text(), nullable=True),
    sa.Column('nickname_for_user', sa.String(length=120), nullable=True),
    sa.Column('special_memories', sa.Text(), nullable=True),
    sa.Column('topics_to_avoid', sa.Text(), nullable=True),
    sa.Column('communication_style', sa.Text(), nullable=True),
    sa.Column('speaking_style', sa.Text(), nullable=True),
    sa.Column('humor_level', sa.String(length=100), nullable=True),
    sa.Column('emotional_tone', sa.String(length=100), nullable=True),
    sa.Column('is_public', sa.Boolean(), nullable=False),
    sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=True),
    sa.Column('updated_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_memory_people_id'), 'memory_people', ['id'], unique=False)
    op.create_index(op.f('ix_memory_people_user_id'), 'memory_people', ['user_id'], unique=False)
    op.create_table('memory_files',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('memory_person_id', sa.Integer(), nullable=False),
    sa.Column('file_name', sa.String(length=255), nullable=False),
    sa.Column('original_name', sa.String(length=255), nullable=False),
    sa.Column('file_path', sa.String(length=1000), nullable=False),
    sa.Column('thumbnail_path', sa.String(length=1000), nullable=True),
    sa.Column('file_type', sa.String(length=50), nullable=False),
    sa.Column('mime_type', sa.String(length=120), nullable=False),
    sa.Column('extension', sa.String(length=20), nullable=True),
    sa.Column('file_size', sa.BigInteger(), nullable=True),
    sa.Column('duration', sa.Integer(), nullable=True),
    sa.Column('description', sa.Text(), nullable=True),
    sa.Column('is_processed', sa.Boolean(), nullable=False),
    sa.Column('processing_status', sa.String(length=50), nullable=False),
    sa.Column('extracted_text', sa.Text(), nullable=True),
    sa.Column('embedding_id', sa.String(length=255), nullable=True),
    sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=True),
    sa.Column('updated_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=True),
    sa.ForeignKeyConstraint(['memory_person_id'], ['memory_people.id'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_memory_files_id'), 'memory_files', ['id'], unique=False)
    op.create_index(op.f('ix_memory_files_memory_person_id'), 'memory_files', ['memory_person_id'], unique=False)
    op.drop_constraint(op.f('refresh_tokens_token_hash_key'), 'refresh_tokens', type_='unique')
    op.drop_index(op.f('ix_refresh_tokens_token_hash'), table_name='refresh_tokens')
    op.create_index(op.f('ix_refresh_tokens_token_hash'), 'refresh_tokens', ['token_hash'], unique=True)
    op.drop_constraint(op.f('users_email_key'), 'users', type_='unique')
    op.drop_index(op.f('ix_users_email'), table_name='users')
    op.create_index(op.f('ix_users_email'), 'users', ['email'], unique=True)


def downgrade() -> None:
    op.drop_index(op.f('ix_users_email'), table_name='users')
    op.create_index(op.f('ix_users_email'), 'users', ['email'], unique=False)
    op.create_unique_constraint(op.f('users_email_key'), 'users', ['email'], postgresql_nulls_not_distinct=False)
    op.drop_index(op.f('ix_refresh_tokens_token_hash'), table_name='refresh_tokens')
    op.create_index(op.f('ix_refresh_tokens_token_hash'), 'refresh_tokens', ['token_hash'], unique=False)
    op.create_unique_constraint(op.f('refresh_tokens_token_hash_key'), 'refresh_tokens', ['token_hash'], postgresql_nulls_not_distinct=False)
    op.drop_index(op.f('ix_memory_files_memory_person_id'), table_name='memory_files')
    op.drop_index(op.f('ix_memory_files_id'), table_name='memory_files')
    op.drop_table('memory_files')
    op.drop_index(op.f('ix_memory_people_user_id'), table_name='memory_people')
    op.drop_index(op.f('ix_memory_people_id'), table_name='memory_people')
    op.drop_table('memory_people')
