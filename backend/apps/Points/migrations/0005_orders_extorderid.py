# Generated by Django 4.1.7 on 2023-04-22 19:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Points', '0004_orders_delete_paymentdetails'),
    ]

    operations = [
        migrations.AddField(
            model_name='orders',
            name='extOrderId',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
    ]
