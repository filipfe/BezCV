# Generated by Django 4.1.4 on 2022-12-23 22:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Candidates', '0003_remove_candidates_candidates__is_veri_fde4a5_idx'),
    ]

    operations = [
        migrations.AddField(
            model_name='candidates',
            name='salary',
            field=models.CharField(default=-1000, max_length=255),
            preserve_default=False,
        ),
    ]
