@echo off
echo Dang khoi dong he thong Database va Redis...

REM Xoa container cu neu dang chay de lam moi hoan toan
docker rm -f maxkb-pg 2>nul
docker rm -f maxkb-redis 2>nul

REM 1. Chay PostgreSQL (su dung image ho tro vector)
echo 1. Dang khoi dong PostgreSQL (pg17)...
docker run -d --name maxkb-pg -e POSTGRES_DB=maxkb -e POSTGRES_USER=root -e POSTGRES_PASSWORD=Password123@postgres -p 5432:5432 pgvector/pgvector:pg17

REM 2. Doi 10 giay de Postgres khoi dong xong xuat cac file he thong
echo    Dang cho PostgreSQL san sang (10 giay)...
timeout /t 10 /nobreak > nul

REM 3. Kich hoat extension vector vao database maxkb
echo 2. Dang kich hoat extension vector cho database 'maxkb'...
docker exec -i maxkb-pg psql -U root -d maxkb -c "CREATE EXTENSION IF NOT EXISTS vector;"

REM 4. Chay Redis
echo 3. Dang khoi dong Redis...
docker run -d --name maxkb-redis -p 6379:6379 redis --requirepass "Password123@redis"

echo ===================================================
echo   KHOI DONG THANH CONG DATABASE, REDIS VA VECTOR!
echo   Bay gio ban hay chay "python main.py dev"
echo ===================================================
pause