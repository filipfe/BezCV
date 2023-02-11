# Generated by Django 4.1.4 on 2023-02-11 12:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Candidates', '0006_candidates_preferred_professions'),
    ]

    operations = [
        migrations.AlterField(
            model_name='candidates',
            name='education',
            field=models.CharField(choices=[('wykształcenie średnie (posiadają osoby, które ukończyły liceum lub pokrewne)', 'wykształcenie średnie (posiadają osoby, które ukończyły liceum lub pokrewne)'), ('wykształcenie wyższe (posiadają osoby, które na studiach wyższych (I, II lub III stopnia) uzyskały tytuł zawodowy licencjata, inżyniera, magistra lub magistra inżyniera, lub uzyskały stopień naukowy doktora)', 'wykształcenie wyższe (posiadają osoby, które na studiach wyższych (I, II lub III stopnia) uzyskały tytuł zawodowy licencjata, inżyniera, magistra lub magistra inżyniera, lub uzyskały stopień naukowy doktora)')], max_length=255),
        ),
    ]
