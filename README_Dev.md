[checkmark]: https://raw.githubusercontent.com/mozgbrasil/mozgbrasil.github.io/master/assets/images/logos/logo_32_32.png "MOZG"
![valid XHTML][checkmark]

# Mozg\Cielo


# Filiação Teste

Merchant ID Test API: a2133427-a0f8-4fe8-b605-6469161e7711

Merchant Key Test API: XUMUBMGQBPNUAYIESMSHTCNLVTNEXIDPHXQRZYOC

Merchant ID Checkout Cielo:

# Database

SELECT * FROM `sales_flat_order` ORDER BY `entity_id` DESC LIMIT 1;

SELECT * FROM `sales_flat_order_payment` ORDER BY `entity_id` DESC LIMIT 1;

SELECT * FROM `mozg_api_debug` ORDER BY `debug_id` DESC LIMIT 1;

SELECT * FROM `mozg_event_data` ORDER BY `event_id` DESC LIMIT 1;

SELECT * FROM `mozg_event_data_queue`;

SELECT * FROM `mozg_order_payment` ORDER BY `entity_id` DESC LIMIT 1;



#


----
## Recorrencia

Para  o processo para recorrencia devendo informar o mesmo PaymentId

1 - Finalizar o pedido

2 - Pegar o pspReference e informar em PaymentId

http://127.0.0.1/public_html/magento-1.9.3.0-dev32/mozg_cielo/process/notification/PaymentId/b6f727e7-2f19-422b-84a8-d0230b431dde/

No uso de RECURRING_CONTRACT 

Acesse em app/code/local/Mozg/Cielo/Model/Api.php

Altere em recurringDetailReference sendo o PaymentId

Execute o Queue

Verá no historico do pedido "Criado o contrato de faturamento "
-----




## Contribuintes

Equipe Mozg

:cat2:
