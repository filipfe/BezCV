# Generated by Django 4.1.4 on 2023-02-28 23:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Candidates', '0007_remove_candidates_preferred_professions_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='candidates',
            name='province',
            field=models.CharField(default='Dolnośląskie', max_length=255),
            preserve_default=False,
        ),
    ]
