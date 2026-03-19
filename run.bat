@echo off
REM Chay PostgreSQL (su dung image ho tro vector)
docker run -d --name maxkb-pg -e POSTGRES_DB=maxkb -e POSTGRES_USER=root -e POSTGRES_PASSWORD=Password123@postgres -p 5432:5432 pgvector/pgvector:pg17

REM Chay Redis
docker run -d --name maxkb-redis -p 6379:6379 redis --requirepass "Password123@redis"

echo Da khoi dong xong Database va Redis!
pause