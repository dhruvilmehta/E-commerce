# Generated by Django 3.0.8 on 2021-06-21 11:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0017_auto_20210621_1722'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ownershistory',
            name='ownedbookid',
            field=models.IntegerField(default=None, null=True),
        ),
        migrations.AlterField(
            model_name='ownershistory',
            name='returnedbookid',
            field=models.IntegerField(default=None, null=True),
        ),
    ]
