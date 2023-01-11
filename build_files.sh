echo " BUILD START"
yum install sqlite-devel

./configure make && make altinstall
python3 -m pip install --user virtualenv
python3 -m venv env
source env/bin/activate
pyenv install 3.10.0
pip install db-sqlite3
python -m pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic --noinput --clear
echo " BUILD END" 
