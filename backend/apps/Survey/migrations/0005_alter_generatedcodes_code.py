# Generated by Django 4.1.4 on 2023-02-15 17:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Survey', '0004_alter_generatedcodes_candidate_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='generatedcodes',
            name='code',
            field=models.CharField(max_length=6),
        ),
    ]
