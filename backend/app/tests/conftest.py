"""
Shared sqlite test-session helper. memory_chunks uses a pgvector Vector
column that sqlite can't compile, so it's excluded from the auto-created
schema here — tests that touch RAG storage directly use Postgres (see
test_ingestion.py / test_retrieval.py, which mock the DB layer instead of
hitting a real one, keeping the whole suite runnable without a live
Postgres+pgvector instance).
"""
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

import app.db.base  # noqa: F401 - registers all models on Base.metadata
from app.db.database import Base


def make_sqlite_session():
    engine = create_engine("sqlite://")
    tables = [t for t in Base.metadata.sorted_tables if t.name != "memory_chunks"]
    Base.metadata.create_all(engine, tables=tables)
    session = sessionmaker(bind=engine)()
    return engine, session
