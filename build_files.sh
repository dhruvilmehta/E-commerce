echo " BUILD START"
python3 -m pip install --user virtualenv
python3 -m venv env
source env/bin/activate
yum install sqlite-devel
pip install pysqlite
pip install db-sqlite3
python -m pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic --noinput --clear
echo " BUILD END" 
