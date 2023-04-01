# Generated by Django 4.1.4 on 2023-03-14 21:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Points', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='paymentdetails',
            name='billing_address',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AddField(
            model_name='paymentdetails',
            name='currency',
            field=models.CharField(default='PLN', max_length=3),
        ),
        migrations.AddField(
            model_name='paymentdetails',
            name='customer_email',
            field=models.EmailField(blank=True, max_length=255),
        ),
        migrations.AddField(
            model_name='paymentdetails',
            name='customer_phone',
            field=models.CharField(blank=True, max_length=20),
        ),
        migrations.AddField(
            model_name='paymentdetails',
            name='payment_datetime',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='paymentdetails',
            name='payment_method',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AddField(
            model_name='paymentdetails',
            name='payment_status',
            field=models.CharField(choices=[('Pending', 'Pending'), ('Successful', 'Successful'), ('Failed', 'Failed')], default='Pending', max_length=20),
        ),
        migrations.AddField(
            model_name='paymentdetails',
            name='shipping_address',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AddField(
            model_name='paymentdetails',
            name='transaction_id',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]