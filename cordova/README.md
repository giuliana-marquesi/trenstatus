# Cordova

## Fazendo build e outras notas

Para fazer build deve-se ir até o diretório montado. No caso do container docker:

```
cd /opt/trenstatus/cordova
```
> Caso seja outro diretório na sua máquina host (no caso de não usar Docker):
 ```
  cd [diretorio-pai]/trenstatus/cordova/
  ```

Ao chegar no diretório, pode-se realizar os comandos normais do cordova:

```
cordova run
cordova platform add android
```

### Fazendo build a primeira vez ###

Como o projeto cordova está apenas com a source (www) vista pelo git, o resto do projeto cordova está apenas inicializado.
Deve-se adicionar uma plataforma ao projeto, no caso, Android.

```
cordova platform add android
```

> **NOTA: NESTE COMANDO ACREDITO NÃO SER BOM USAR O --SAVE, POIS ELE ADICIONA AO PROJETO (ARQUIVO .XML) AS CONFIGURAÇÕES ANDROID**
