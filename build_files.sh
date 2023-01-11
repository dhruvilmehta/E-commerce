echo " BUILD START"
python3.9 -m pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python3.9 manage.py collectstatic --noinput --clear
echo " BUILD END" 
