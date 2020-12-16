# Проект "S4S - Students4Students"

Целью данного проекта является разработка сайта, который решает проблему связи абитуриентов и студентов университета. В популярных социальных сетях сложно найти человека, готового проконсультировать школьника по поводу интересующего его направления. Проект позволяет школьникам и абитуриентам узнать необходимую информацию от людей из конкретных университетов, обучающихся по конкретным образовательным программам.

## Участники

Проект выполнили студенты:
* Московская П.А. (гр.3530904/80102)
* Шредер А.Д.     (гр.3530904/80102)
* Лукина В.А.     (гр.3530904/80101)

## Требования

Требования представлены в формате UML-диаграммы:
![UML-diagram](https://downloader.disk.yandex.ru/preview/2a5baa09a2fd0525c89893e16c2883ad9014b3cc304a783894bb99b37fe23e14/5fdaa504/nGOEcJGE4BeiqiWXGrkTTGoRC_hDBBKz59coAZOnRtO6fnL3eAb7L7k2Zr1qve1fOPjwwM8DhT4DzHL_yQjVEQ%3D%3D?uid=0&filename=image.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1918x1004)

## Диаграммы

1. System Context diagram
![System Context Diagram](https://downloader.disk.yandex.ru/preview/35384df12da2f87fcecdcfde58ff4d3c0466be9b762794d21e77169081202db8/5fdaa504/wsFeQSRfwow5-hg6wI-rlr9ccTf1Pov_LqN_cvH8kTbwTDn7XZ-G_XLIBbY9OhrWwOhezs5JFbVTtTXHH2T6Fw%3D%3D?uid=0&filename=sd.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1918x1004)
2. Container diagram
![System Container Diagram](https://downloader.disk.yandex.ru/preview/81e9e81d6b8264157bac255bea6bd3159bc310a44c0260228c17892238884fcc/5fdaa504/UJHWk-rvUPjquTW6EF280GoRC_hDBBKz59coAZOnRtPIpHXHUhnsDVs_36VamzOjvZqDajFDMIc8s8HQNBr2IQ%3D%3D?uid=0&filename=ddd.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1918x1004)

## Кодирование и отладка

Серверная часть сайта написана на языке Java, был также использован фреймворк Java Spring Framework. В качестве системы управления базами данных был выбран PostgreSQL. 

Клиентская часть реализована с помощью React — JavaScript-библиотеки с открытым исходным кодом для разработки пользовательских интерфейсов.

## Тестирование

Для серверной части были написаны Unit-тесты для тестирования всех эндпоинтов, для чего была использована мок-библиотека Mockito и фреймворк Spring MVC Test.

Интеграционные тесты были написаны для основных пунктов из требований: регистрация пользователя, редактирование профиля, добавление интересующих предметов, поиск подходящих студентов или старшеклассников. Для тестирования API был использован TestRestTemplate, а также дополнительная база данных PostgreSQL.Для клиентской части были реализованы тесты с использованием фреймворка Jest

## Команды запуска и тестирования

1.Серверная часть

Сборка: gradle build

Запуск: gradle bootRun

Запуск тестов: gradlew test (интеграционных – gradle test  - -tests IntegrationTesting)

2.Клиентская часть

Сборка: npm build

Запуск: npmstart

Запуск тестов: npmtest
