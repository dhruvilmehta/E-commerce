echo " BUILD START"
pip install db-sqlite3
python -m pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic --noinput --clear
echo " BUILD END" 
