# Generated by Django 4.1.4 on 2023-02-15 00:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Candidates', '0003_candidates_desc'),
    ]

    operations = [
        migrations.AlterField(
            model_name='candidates',
            name='desc',
            field=models.TextField(blank=True, null=True),
        ),
    ]
