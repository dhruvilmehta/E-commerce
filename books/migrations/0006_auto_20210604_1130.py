# Generated by Django 3.0.8 on 2021-06-04 06:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0005_books_duration'),
    ]

    operations = [
        migrations.AlterField(
            model_name='books',
            name='duration',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]