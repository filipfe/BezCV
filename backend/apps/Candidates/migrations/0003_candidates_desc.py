# Generated by Django 4.1.4 on 2023-02-15 00:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Candidates', '0002_candidates_is_visible'),
    ]

    operations = [
        migrations.AddField(
            model_name='candidates',
            name='desc',
            field=models.TextField(null=True),
        ),
    ]
