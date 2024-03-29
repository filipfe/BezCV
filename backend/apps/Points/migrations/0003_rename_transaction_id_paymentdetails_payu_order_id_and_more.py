# Generated by Django 4.1.7 on 2023-03-19 02:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Points', '0002_paymentdetails_billing_address_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='paymentdetails',
            old_name='transaction_id',
            new_name='payu_order_id',
        ),
        migrations.RemoveField(
            model_name='paymentdetails',
            name='billing_address',
        ),
        migrations.RemoveField(
            model_name='paymentdetails',
            name='customer_email',
        ),
        migrations.RemoveField(
            model_name='paymentdetails',
            name='customer_phone',
        ),
        migrations.RemoveField(
            model_name='paymentdetails',
            name='payment_datetime',
        ),
        migrations.RemoveField(
            model_name='paymentdetails',
            name='payment_method',
        ),
        migrations.RemoveField(
            model_name='paymentdetails',
            name='payment_status',
        ),
        migrations.RemoveField(
            model_name='paymentdetails',
            name='shipping_address',
        ),
        migrations.AddField(
            model_name='paymentdetails',
            name='payu_status',
            field=models.CharField(blank=True, max_length=20),
        ),
        migrations.AlterField(
            model_name='paymentdetails',
            name='price',
            field=models.DecimalField(decimal_places=2, max_digits=7),
        ),
    ]
