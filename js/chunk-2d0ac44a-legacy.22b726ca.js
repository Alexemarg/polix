(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ac44a"],{"198d":function(e){e.exports=JSON.parse('{"$id":"project","_v":0,"$schema":"http://json-schema.org/draft-07/schema#","title":"Newsletter Subscription","description":"A geographical coordinate.","type":"object","required":["manifest","preview","i","m","a"],"_folders":["i","m","a","l","s"],"_private":[""],"definitions":{"textkey":{"$id":"#textkey","type":"string","maxLength":8,"pattern":"^\\\\w+$"},"color":{"$id":"#color","type":"string","example":"00AAFF","pattern":"^[\\\\dA-Fa-f]{6}$","widget":"colorpicker"},"lang":{"$id":"#lang","type":"string","enum":["ru","en"]},"base64img":{"$id":"#base64img","type":"string","widget":"image","_accept":".png","pattern":"^data:image\\\\/png;base64,.+$"},"base64aud":{"$id":"#base64aud","type":"string","widget":"audio","_accept":".mp3, .wav, .ogg","pattern":"^data:audio\\\\/(mpeg|ogg|wav);base64,.+$"},"list":{"$id":"#list","type":"object","widget":"list","propertyNames":{"$ref":"#textkey"},"additionalProperties":{"type":"string"}},"file_img":{"$id":"#file_img","type":"object","widget":"form","properties":{"n":{"$ref":"#textkey","title":"Псевдоним"},"i":{"$ref":"#list","title":"Информация"},"d":{"$ref":"#base64img"}}},"file_aud":{"$id":"#file_aud","type":"object","widget":"form","properties":{"n":{"$ref":"#textkey","title":"Псевдоним"},"i":{"$ref":"#list","title":"Информация"},"d":{"$ref":"#base64aud"}}},"d_block":{"$id":"#d_block","type":"object","widget":"form","properties":{"n":{"$ref":"#textkey","title":"Название"},"i":{"type":"number","_link":"i.b:n","_tarIx":true,"title":"Текстура"},"a":{"type":"string","_link":"n:n?_c=b","_tarIx":true,"title":"Анимация"},"c":{"$ref":"#color","title":"Цвет","description":"Цвет, используемый вместо текстуры, если ее нет, и ..."},"is_p":{"type":"boolean","title":"Коллизия","default":true}}},"d_struct":{"$id":"#d_struct","type":"object","widget":"form","properties":{"n":{"$ref":"#textkey","title":"Название"},"i":{"type":"number","_link":"i.s:n","_tarIx":true,"title":"Текстура"},"w":{"type":"number","default":1,"title":"Ширина (клет.)"},"h":{"type":"number","default":1,"title":"Высота (клет.)"},"c":{"$ref":"#color","title":"Цвет","description":"Цвет, используемый вместо текстуры, если ее нет, и ..."},"is_p":{"type":"boolean","title":"Коллизия"}}},"d_entity":{"$id":"#d_entity","type":"object","widget":"form","_private":["rls"],"properties":{"rls":{"$ref":"#rules","_ctx":2},"n":{"$ref":"#textkey","title":"Название"},"d":{"type":"string","maxLength":1024,"title":"Описание","widget":"textarea"},"i":{"type":"number","_link":"i.e:n","_tarIx":true,"title":"Спрайт"},"c":{"$ref":"#color","title":"Цвет","description":"Цвет, используемый вместо текстуры, если ее нет, и ..."},"al":{"type":"string","title":"Список анимаций"},"w":{"type":"number","default":1,"title":"Ширина (клет.)"},"h":{"type":"number","default":1,"title":"Высота (клет.)"},"vx":{"type":"number","default":100,"title":"Скорость по X"},"vy":{"type":"number","default":100,"title":"Скорость по Y (сила прыжка)"},"mx":{"type":"number","default":100,"title":"Макс. скорость по X"},"my":{"type":"number","default":100,"title":"Макс. скорость по Y"},"ax":{"type":"number","default":100,"title":"Ускорение по X"},"ay":{"type":"number","default":100,"title":"Ускорение по Y"},"dx":{"type":"number","default":100,"title":"Торможение по X"},"dy":{"type":"number","default":100,"title":"Торможение по Y"}}},"m_map":{"$id":"#m_map","type":"object","title":"Карта","properties":{"m":{"type":"object","title":"Манифест","_private":["t_c","t_u"],"properties":{"t_c":{"type":"number","title":"Время создания карты"},"t_u":{"type":"number","title":"Время последнего обновления карты"},"n":{"type":"string","title":"Название"},"d":{"type":"string","maxLength":1024,"title":"Описание","widget":"textarea"},"c":{"$ref":"#color","title":"Цвет фона"},"w":{"type":"number","default":64,"title":"Ширина"},"h":{"type":"number","default":16,"title":"Высота"},"p_g":{"type":"number","default":1000,"title":"Гравитация"}}},"d":{"type":"object","title":"Данные","properties":{"p":{"type":"object"}}},"l":{"type":"object","title":"Слои","properties":{"b":{"type":"string","title":"Задний фон"},"m":{"type":"string","title":"Физический"},"s":{"type":"string","title":"Структуры"}}}}},"rules":{"$id":"#rules","type":"array","title":"Правила","items":{"type":"object","title":"Набор правил","properties":{"n":{"type":"string"},"e":{"type":"array"},"v":{"type":"array"},"a":{"type":"array"},"s":{"type":"object","title":"Настройки","properties":{"i_o":{"type":"boolean","title":"Однократно"}}}}}}},"properties":{"mn":{"title":"Манифест","description":" Содержит основную информацию проекта","widget":"form","type":"object","required":["n"],"_private":["t_c","t_u","v_t","v_s","pv_a"],"properties":{"t_c":{"type":"number","title":"Время создания проекта"},"t_u":{"type":"number","title":"Время последнего обновления проекта"},"v_t":{"type":"string","title":"Целевая версия движка","pattern":"^\\\\d+\\\\.\\\\d+\\\\.\\\\d+$"},"v_s":{"type":"number","title":"Версия схемы проекта"},"pv_a":{"title":"Авто превью","$ref":"#base64img"},"n":{"type":"string","title":"Название","description":"Какое-то описание","example":"3-32 символов","minLength":3,"maxLength":32},"d":{"type":"string","maxLength":1024,"title":"Описание","widget":"textarea"},"l":{"$ref":"#lang","title":"Язык по-уполчанию","widget":"select"},"cs":{"type":"number","title":"Размер клетки (пикс.)"},"pv":{"title":"Превью проекта","$ref":"#base64img"}}},"d":{"type":"object","title":"Данные","widget":"datares","properties":{"b":{"type":"array","title":"Блоки","items":{"$ref":"#d_block"}},"s":{"type":"array","title":"Структуры","items":{"$ref":"#d_struct"}},"e":{"type":"array","title":"Сущности","items":{"$ref":"#d_entity"}}}},"i":{"type":"object","title":"Изображения","widget":"imgres","properties":{"b":{"type":"array","title":"Блоки","items":{"$ref":"#file_img"}},"s":{"type":"array","title":"Структуры","items":{"$ref":"#file_img"}},"e":{"type":"array","title":"Сущности","items":{"$ref":"#file_img"}},"i":{"type":"array","title":"Предметы","items":{"$ref":"#file_img"}},"p":{"type":"array","title":"Частицы","items":{"$ref":"#file_img"}}}},"m":{"type":"array","title":"Карты","widget":"mapeditor","items":{"$ref":"#m_map"}},"a":{"type":"object","title":"Аудио","widget":"audres","properties":{"e":{"type":"array","title":"Эффекты","items":{"$ref":"#file_aud"}},"m":{"type":"array","title":"Музыка","items":{"$ref":"#file_aud"}}}},"n":{"type":"array","title":"Анимации","widget":"animres","items":{"type":"object","_categories":{"b":"Блоки","e":"Сущности"},"_private":["_c"],"properties":{"_c":{"type":"string"},"n":{"title":"Название","$ref":"#textkey"},"w":{"type":"number","title":"Ширина кадра"},"h":{"type":"number","title":"Высота кадра"},"i":{"type":"number","title":"Тестовый спрайт","$ref":"#textkey","_link":"i.{CATEG}:n","_tarIx":true},"fs":{"type":"number","title":"Стартовый кадр"},"fe":{"type":"number","title":"Конечный кадр"},"s":{"title":"Скорость","type":"number"},"yy":{"type":"boolean","title":"Стиль Йо-йо"},"r":{"type":"number","default":-1,"title":"Кол-во повторений"}}}},"l":{"type":"object","title":"Локализация","widget":"locres","propertyNames":{"$ref":"#lang"},"additionalProperties":{"type":"object","propertyNames":{"$ref":"#textkey"},"additionalProperties":{"type":"string"}}},"r":{"$ref":"#rules","title":"Правила","widget":"rulesres"}}}')}}]);
//# sourceMappingURL=chunk-2d0ac44a-legacy.22b726ca.js.map