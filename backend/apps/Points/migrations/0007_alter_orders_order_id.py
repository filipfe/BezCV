# Generated by Django 4.1.7 on 2023-06-05 16:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Points', '0006_rename_extorderid_orders_order_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orders',
            name='order_id',
            field=models.CharField(max_length=255, unique=True),
        ),
    ]
