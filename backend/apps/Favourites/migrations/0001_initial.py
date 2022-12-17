# Generated by Django 4.1.4 on 2022-12-17 19:43

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Candidates', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='FavouriteCandidates',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('candidate', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='favouritecandidates_candidate', to='Candidates.candidates')),
                ('employer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='favouritecandidates_employer', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'Favourite Candidates',
                'unique_together': {('employer', 'candidate')},
            },
        ),
    ]
