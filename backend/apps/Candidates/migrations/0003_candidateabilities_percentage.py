# Generated by Django 4.1.4 on 2023-01-18 02:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Candidates', '0002_candidates_salary'),
    ]

    operations = [
        migrations.AddField(
            model_name='candidateabilities',
            name='percentage',
            field=models.DecimalField(decimal_places=0, default=20, max_digits=3),
            preserve_default=False,
        ),
    ]