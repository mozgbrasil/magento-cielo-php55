![valid XHTML][checkmark]
[checkmark]: https://raw.githubusercontent.com/mozgbrasil/mozgbrasil.github.io/master/assets/images/logos/Red_star_32_32.png "MOZG"
[url-method]: http://www.cielo.com.br/
[requerimentos]: http://mozgbrasil.github.io/requerimentos/
[contact-cielo]: http://www.cielo.com.br/cielo/ecp/comunidade.do?app=portal&pg=20004&view=faleconosco
[tickets]: https://cerebrum.freshdesk.com/support/tickets/new
[preco]: http://www.cerebrum.com.br/preco/
[getcomposer]: https://getcomposer.org/
[uninstall-mods]: https://getcomposer.org/doc/03-cli.md#remove
[magento-cron]: http://devdocs.magento.com/guides/m1x/install/installing_install.html#install-cron
[mozg-cron]: https://mozg.com.br/dicas/dicas-magento1#como-ativar-a-cron-no-magento

# Mozg\Cielo

## Sinopse

Integração a [Cielo][url-method] 3.0

## Motivação

Atender o mercado de módulos para Magento oferecendo melhorias e um excelente suporte

## Suporte / Dúvidas

Para obter o devido suporte [Clique aqui][tickets], relatando o motivo da ocorrência o mais detalhado possível e anexe o print da tela para nosso entendimento

## Preço

[Clique aqui][preco]

## Recursos

- Autorização, Consulta

<!--, Captura, Reembolso-->

## Característica técnica

No checkout é feito o processo de autorização

No retorno de "Transação autorizada" é feito redirecionamento para a página de sucesso

Na página de sucesso é disparado acesso para o recurso de notificação da transação

Sempre confira as informações do pedido inclusive junto a operadora financeira se a transação foi capturada antes de processar cada pedido, caso algo esteja inconsistente será necessário cancelar o pedido até a correção da ocorrência

<!--

## Mozg OneClick

No módulo as Referências Recorrentes são salvas nos <a href="http://docs.magento.com/m1/ce/user_guide/payment/paypal-billing-agreements.html" target="_blank">Contratos de Faturamento</a> do Magento.

Todos os novos cartões salvos serão automaticamente salvos em Contratos de Faturamento do Magento.

-->

## Setup Cron

Para o uso do método é necessário ativar o Magento [CRON][magento-cron] | [CRON][mozg-cron].

Certifique-se de que ação esteja sendo executado a cada minuto.

Nós estamos usando um cronjob para processar as notificações.

Ele só executa as notificações que foram recebidas há pelo menos 5 minutos. 

Uma ferramenta útil para gerenciar os seus cronjobs é o módulo AOE scheduler.

Você pode fazer o download desta ferramenta através do <a href="http://www.magentocommerce.com/magento-connect/aoe-scheduler.html" target="_blank">Magento Connect</a> ou do <a target="_blank" href="https://github.com/AOEpeople/Aoe_Scheduler/releases">GitHub</a>

ou instalar via composer, que é a melhor opção

Para instalar o módulo execute o comando a seguir no terminal do seu servidor

	composer require aoepeople/aoe_scheduler

## Instalação - Atualização - Desinstalação - Desativação

Este módulo destina-se a ser instalado usando o [Composer][getcomposer]

Antes de executar os processos, [clique aqui][requerimentos] e leia os pré-requisitos e sugestões

--

Certique se da existencia do arquivo composer.json na raiz do projeto Magento e que o mesmo tenha os trechos "minimum-stability", "prefer-stable", "repositories" e '"magento-root-dir":"./"', conforme https://gist.github.com/mozgbrasil/0c9bb8792ea6273ea24aed30b0fbcfba

Caso não exista o arquivo composer.json na raiz do projeto Magento, efetue o download

	wget https://gist.githubusercontent.com/mozgbrasil/0c9bb8792ea6273ea24aed30b0fbcfba/raw/9b514bc896171b6d75833b6f165065356f62ca59/composer.json

--

Para qualquer atualização no Magento sempre mantenha o Compiler e o Cache desativado

--

### Para instalar o módulo execute o comando a seguir no terminal do seu servidor

	composer require mozgbrasil/magento-cielo-php55:dev-master

Você pode verificar se o módulo está instalado, indo ao backend em:

	STORES -> Configuration -> ADVANCED/Advanced -> Disable Modules Output

--

### Para atualizar o módulo execute o comando a seguir no terminal do seu servidor

	composer clear-cache && composer update

Na ocorrência de erro, renomeie a pasta /vendor/mozgbrasil e execute novamente

Para checar a data do módulo execute o seguinte comando

	grep -ri 'time": "' ./vendor/mozgbrasil

--

### Para [desinstalar][uninstall-mods] o módulo execute o comando a seguir no terminal do seu servidor

	composer remove mozgbrasil/magento-cielo-php55 && composer clear-cache && composer update

--

### Para desativar o módulo

Renomeie a pasta do módulo

Cada módulo tem a sua pasta no diretório /vendor/mozgbrasil/

## Como configurar o método de pagamento

Para configurar o método de pagamento, acesse no backend em:

	STORES -> Configuration -> Sales/Payment Methods -> Cielo (powered by MOZG)

Você terá os campos a seguir

### Cielo API 3.0 - Configurações Padrão

#### Configurações necessárias

##### • **Modo Teste ou Produção**

Deve ser informado o devido ambiente

##### • **Merchant ID para o ambiente de teste**

Efetue o cadastro no seguinte ambiente para obter os dados de integração como: MerchantId e MerchantKey

https://cadastrosandbox.cieloecommerce.cielo.com.br/

##### • **Merchant Key Ambiente de teste**

Efetue o cadastro no seguinte ambiente para obter os dados de integração como: MerchantId e MerchantKey

https://cadastrosandbox.cieloecommerce.cielo.com.br/

##### • **Merchant ID para o ambiente de produção**

A informação deve ser fornecido pela Cielo

##### • **Merchant Key Ambiente de produção**

A informação deve ser fornecido pela Cielo

##### • **Merchant ID Checkout Cielo**

A informação deve ser fornecido pela Cielo

##### • **Tempo de Captura**

Imediato é o padrão

Defina como manual se você quiser executar a captura de fundos manualmente mais tarde

##### • **Status do pedido: ordem de criação**

Status dos pedidos recém-criados, antes da confirmação de resultado de pagamento via notificações de servidor da operadora

##### • **Status do pedido: autorização de pagamento**

Status dos pedidos após autorização confirmada por uma notificação de AUTORIZAÇÃO da operadora

##### • **Status do pedido: pagamento confirmado**

Status dos pedidos após captura confirmada por uma notificação de AUTORIZAÇÃO da operadora

##### • **Status do pedido: cancelamento de pedido**

Status dos pedidos após cancelamento confirmada por uma notificação de CANCELAMENTO da operadora

Se as encomendas já estiverem faturadas, não poderão ser canceladas

##### • **Ativar log de depuração**

Deve ser armazenado os processos do módulo em var/log/

O arquivo 

DATE_mozg.log

se trata de log do módulo sendo um log mais detalhado contendo todos os processos inclusive das execuções realizadas pelas bibliotecas externas do módulo

O arquivo

payment_METHOD.log

#### Avançado: Processamento de Pedidos Magento

##### • **Status do pedido: captura de pagamento (produtos virtuais)**

Selecione somente o status atribuído ao estado concluído, deixe vazio para usar o mesmo que os produtos normais

##### • **Status do pedido: Reembolsado**

Status dos pedidos após reembolso confirmada por uma notificação de REEMBOLSO da operadora

##### • **Status do pedido: Reembolsado Parcial**

Status dos pedidos após reembolso (parcial) confirmada por uma notificação de REEMBOLSO_PARCIAL da operadora. Recomendamos que não defina este status e deixe Magento decidir o status.

##### • **Status do pedido: pedidos pendentes**

Status dos pedidos após notificação de PENDENCIA da operadora

##### • **Criar uma fatura pendente (apenas para captura manual)**

Isso criará uma fatura pendente se a notificação de AUTORIZAÇÃO for recebida.

 Nota: isto fará com que Magento empurre todas as encomendas para o estado: 'Processamento' uma vez que a fatura é criada, ignorando todas as outras definições.

##### • **Status do pedido: Capturar no embarque**

Se você habilitar esta função será feito uma solicitação de captura para a operadora se você fizer o envio

##### • **Ativar Descancelar pedido**

Se uma pedido é cancelada por algum motivo, mas recebeu uma notificação de que o pagamento é autorizado, isso cancelará automaticamente o pedido

##### • **Cancelamento\Reembolso automático quando o pedido é cancelado**

Ativar / Desativar reembolso automático ao cancelar um pedido

##### • **E-mail da fatura**

Ativar / desativar atualizações de e-mails

##### • **Os clientes recebem e-mail de atualização de status de pedido**

Ativar / desativar e-mails de atualização para todas as alterações no status do pedido para o cliente

#### Avançado: Cielo Notificações

##### • **Ignorar notificação de reembolso**

Se o reembolso for feito na operadora, e a mesma enviar uma notificação de reembolso para o Magento, deve ser criado automaticamente uma nota de crédito. Se você definir essa configuração como 'Sim', isso não acontecerá porque ele não processará nenhuma das notificações de REEMBOLSO recebidas.

<!--
#### Avançado: Contratos de faturamento

##### • **Tipo de Contrato**

Quando ativado, os usuários podem salvar seus cartões de crédito e suas autorizações 

ONECLICK exigirá a entrada do CVC para pagamentos subsequentes, enquanto RECURRING não.
-->

#### Avançao: Experiência de Checkout

##### • **Redirecionar o destino após o cancelamento**

Determina como os compradores são redirecionados após cancelar um pagamento.

##### • **Método de pagamento método de renderização**

Determina se os métodos de pagamento serão exibidos com seu logotipo ou apenas o nome.

##### • **Idioma local (opcional)**

Isso substituirá o local do cliente padrão do armazenamento do Magento. 

Deixe vazio para deixar Magento decidir (Ex: nl_NL)

##### • **Código do país ISO (opcional)**

Isso irá substituir o país do endereço de faturamento do comprador ao determinar quais métodos de pagamento serão exibidos.

<!--
#### Avançado: Revisão manual

##### • **Status da revisão manual**

Esse status será acionado quando a operadora notificar o módulo Magento de que o pagamento foi incluído na revisão manual. Se você não tiver essa configuração ou não quiser um status separado, mantenha-o no padrão (por exemplo, '- Por Favor Selecione -').

#### • **Revisão Manual Status Aceito**

Apenas relevante se você não tiver uma ação definida quando você aceitar uma revisão manual. Este status será acionado quando uma notificação "MANUAL_REVIEW_ACCEPT" for recebida da operadora. Se você já pediu a operadora para definir uma ação para isso (por exemplo, captura) ou não quiser um status separado para isso, mantenha-o no padrão (por exemplo, '- Por Favor Selecione -')

#### Avançado: Dividir Pagamentos

##### • **Estratégia de reembolso**

É possível fazer pagamentos divididos com GiftCards, por favor configure aqui qual estratégia de reembolso você deseja usar
-->

### Cartão de Crédito Cielo

#### • **Ativar**

Para "ativar" ou "desativar" o uso do método

#### • **Ordem de exibição**

É a ordem apresentada em métodos de entrega no passo de fechamento de pedido

#### • **Título**

Nome do método que deve ser exibido

#### • **Pagamentos aplicáveis aos países**

Você pode definir se o método deve funcionar para "Todos os Países aceito" ou "Especificar Países "

#### • **Pagamentos específicos aos países**

Você deve selecionar os países que o método deve ser funcional

#### • **Tipos de Cartão de Crédito**

Selecione as bandeiras liberadas pela operadora

#### • **Visível em**

Determine a visibilidade desse método de pagamento no frontend e/ou backend do Magento

#### • **Autenticar**

Define se o comprador será direcionado ao Banco emissor para autenticação do cartão

#### • **Ativar Parcelamentos**

Define o uso de parcelas

#### • **Parcelas padrão**

Para a coluna "Moeda" informe a sigla da moeda por exemplo BRL

Para a coluna "Montante (incl.)" informe o valor para a exibição da parcela

Para a coluna "Número máximo de parcelas" informe o número de parcelas que sera exibida até o valor previamente informando para a exibição da parcela

Para a coluna "Taxa de juro (%)" informe a taxa de juro usada


O módulo já vem pré-configurado da seguinte forma

Até R$ 100,00 em 1 parcela

Até R$ 200,00 em 2 parcelas

Até R$ 600,00 em 3 parcelas

Até R$ 800,00 em 4 parcelas

Até R$ 10.000,00 em 5 parcelas

Até R$ 100.000,00 em 6 parcelas

Altere conforme sua necessidade

#### • **Desativar em total geral zero**

Desative esta forma de pagamento no checkout quando o total geral da cotação for 0.

### Cartão de Débito Cielo

#### • **Ativar**

Para "ativar" ou "desativar" o uso do método

#### • **Ordem de exibição**

É a ordem apresentada em métodos de entrega no passo de fechamento de pedido

#### • **Título**

Nome do método que deve ser exibido

#### • **Pagamentos aplicáveis aos países**

Você pode definir se o método deve funcionar para "Todos os Países aceito" ou "Especificar Países "

#### • **Pagamentos específicos aos países**

Você deve selecionar os países que o método deve ser funcional

#### • **Tipos de Cartão de Débito**

Selecione as bandeiras liberadas pela operadora

#### • **Visível em**

Determine a visibilidade desse método de pagamento no frontend e/ou backend do Magento

#### • **Ativar Parcelamentos**

Define o uso de parcelas

#### • **Parcelas padrão**

Para a coluna "Moeda" informe a sigla da moeda por exemplo BRL

Para a coluna "Montante (incl.)" informe o valor mínimo para a exibição da parcela

Para a coluna "Número máximo de parcelas" informe o número de parcelas que sera exibida até o valor previamente informando para a exibição da parcela

Para a coluna "Taxa de juro (%)" informe a taxa de juro usada

#### • **Desativar em total geral zero**

Desative esta forma de pagamento no checkout quando o total geral da cotação for 0.

### Boleto Cielo

#### • **Ativar**

Para "ativar" ou "desativar" o uso do método

#### • **Ordem de exibição**

É a ordem apresentada em métodos de entrega no passo de fechamento de pedido

#### • **Título**

Nome do método que deve ser exibido

#### • **Pagamentos aplicáveis aos países**

Você pode definir se o método deve funcionar para "Todos os Países aceito" ou "Especificar Países "

#### • **Pagamentos específicos aos países**

Você deve selecionar os países que o método deve ser funcional

#### • **Tipos de Boleto**

Selecione as bandeiras liberadas pela operadora

#### • **Status do pedido não pago**

Com Boleto é possível pagar menos do que o valor total. Selecione aqui o status, se este for o caso. Se você deixar isso em branco, ele tomará o status de pedido de pagamento autorizado como status padrão

#### • **Status do pedido pago em excesso**

Com Boleto é possível pagar mais do que o valor total. Selecione aqui o status, se este for o caso. Se você deixar isso em branco, ele tomará o status de pedido de pagamento autorizado como status padrão

#### • **Visível em**

Determine a visibilidade desse método de pagamento no frontend e/ou backend do Magento

### Transferência Eletrônica Cielo

#### • **Ativar**

Para "ativar" ou "desativar" o uso do método

#### • **Ordem de exibição**

É a ordem apresentada em métodos de entrega no passo de fechamento de pedido

#### • **Título**

Nome do método que deve ser exibido

#### • **Pagamentos aplicáveis aos países**

Você pode definir se o método deve funcionar para "Todos os Países aceito" ou "Especificar Países "

#### • **Pagamentos específicos aos países**

Você deve selecionar os países que o método deve ser funcional

#### • **Tipos de Transferência Eletrônica**

Selecione as bandeiras liberadas pela operadora

#### • **Status do pedido não pago**

Com Boleto é possível pagar menos do que o valor total. Selecione aqui o status, se este for o caso. Se você deixar isso em branco, ele tomará o status de pedido de pagamento autorizado como status padrão

#### • **Status do pedido pago em excesso**

Com Boleto é possível pagar mais do que o valor total. Selecione aqui o status, se este for o caso. Se você deixar isso em branco, ele tomará o status de pedido de pagamento autorizado como status padrão

#### • **Visível em**

Determine a visibilidade desse método de pagamento no frontend e/ou backend do Magento

### Checkout Cielo

#### • **Ativar**

Para "ativar" ou "desativar" o uso do método

#### • **Ordem de exibição**

É a ordem apresentada em métodos de entrega no passo de fechamento de pedido

#### • **Título**

Nome do método que deve ser exibido

#### • **Pagamentos aplicáveis aos países**

Você pode definir se o método deve funcionar para "Todos os Países aceito" ou "Especificar Países "

#### • **Pagamentos específicos aos países**

Você deve selecionar os países que o método deve ser funcional

#### • **Nome que aparecerá na fatura**

Informe o nome que aparecerá na fatura

#### • **Ativar Antifraud**

Defina o uso

#### • **Status do pedido não pago**

Com Boleto é possível pagar menos do que o valor total. Selecione aqui o status, se este for o caso. Se você deixar isso em branco, ele tomará o status de pedido de pagamento autorizado como status padrão

#### • **Status do pedido pago em excesso**

Com Boleto é possível pagar mais do que o valor total. Selecione aqui o status, se este for o caso. Se você deixar isso em branco, ele tomará o status de pedido de pagamento autorizado como status padrão

#### • **Visível em**

Determine a visibilidade desse método de pagamento no frontend e/ou backend do Magento

## Quais os recursos do módulo

- [✓] Transação
- [✓] Captura

## Perguntas mais frequentes "FAQ"

### Oque fazer após a instalação do módulo ?

Crie uma conta de teste em 

https://cadastrosandbox.cieloecommerce.cielo.com.br/

Onde será fornecido o seu MerchantId e MerchantKey

Configure no método o seu MerchantId e MerchantKey

Efetue um teste 

Se foi exibido a tela de finalização quer dizer que foi processado sua transação

Envie e-mail para a Cielo solicitando homologação dessa integração e solicitando os dados para ser usados em ambiente de produção

A Cielo deve enviar e-mail com os devidos procedimentos

Não envie de e-mail a Cielo contendo assinatura e logotipos pois o mesmo pode ser bloqueado

O corpo do e-mail tem que ser branco somente com a interação de homologação

30 minutos depois de enviar o e-mail ligar para confirmar se eles receberem o e-mail

Dados que a Cielo solicita quando se liga para a confirmação do e-mail ( Número do estabelecimento, razão social e CNPJ)

### Como alterar a imagem do método

Em

/skin/frontend/base/default/images/mozg_cielo

Pode ser adicionado as seguintes imagens

method-boleto.png
method-creditcard.png
method-debitcard.png
method-eletronictransfer.png

Que corresponde a cada método

Mas o suporte deve ser sempre aplicado ao template do projeto

### Dados de contato - Cielo

Cielo E-Commerce <cieloecommerce@cielo.com.br>
Tel: 4002-9700 (Capitais e regiões metropolitanas) e 0800-570-1700 (Demais localidades)

ou acesse

Para entrar em contato com a [Cielo][contact-cielo]

## Manual

https://www.cielo.com.br/wps/portal/Home/internas/desenvolvedores/

https://developercielo.github.io/Webservice-3.0/

## Contribuintes

Equipe Mozg

## License

[Comercial License] (LICENSE.txt)

## Badges

[![Join the chat at https://gitter.im/mozgbrasil](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/mozgbrasil/)
[![Latest Stable Version](https://poser.pugx.org/mozgbrasil/magento-cielo-php55/v/stable)](https://packagist.org/packages/mozgbrasil/magento-cielo-php55)
[![Total Downloads](https://poser.pugx.org/mozgbrasil/magento-cielo-php55/downloads)](https://packagist.org/packages/mozgbrasil/magento-cielo-php55)
[![Latest Unstable Version](https://poser.pugx.org/mozgbrasil/magento-cielo-php55/v/unstable)](https://packagist.org/packages/mozgbrasil/magento-cielo-php55)
[![License](https://poser.pugx.org/mozgbrasil/magento-cielo-php55/license)](https://packagist.org/packages/mozgbrasil/magento-cielo-php55)
[![Monthly Downloads](https://poser.pugx.org/mozgbrasil/magento-cielo-php55/d/monthly)](https://packagist.org/packages/mozgbrasil/magento-cielo-php55)
[![Daily Downloads](https://poser.pugx.org/mozgbrasil/magento-cielo-php55/d/daily)](https://packagist.org/packages/mozgbrasil/magento-cielo-php55)
[![Reference Status](https://www.versioneye.com/php/mozgbrasil:magento-cielo-php55/reference_badge.svg?style=flat-square)](https://www.versioneye.com/php/mozgbrasil:magento-cielo-php55/references)
[![Dependency Status](https://www.versioneye.com/php/mozgbrasil:magento-cielo-php55/1.0.0/badge?style=flat-square)](https://www.versioneye.com/php/mozgbrasil:magento-cielo-php55/1.0.0)

:cat2: