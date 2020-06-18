
### Events
  Map: initialized
  
  Block: removed
  Block: placed

  Entity: spawned
  Entity: died
  Entity: touched *[ent ]*(side *[t, r, d, l]*, targetObjectType *[block, sctuct, entity, item, part]*, )
  Entity: update _{this}_
  Entity: moving _{this}_

  Custom *[name ]*
  All *[name ]*
  One *[name ]*

### Action
  Program: wait *[ms_time ]*
  Program: if-then-else
  Program: cycle *[number ]* times
  Program: disable this rule
  Program: enable this rule
  Data: set *[toVar, ]*
  Data: random *[toVar, ]*
  Data: compare *[toVar, ]*

  Camera: follow *[ent_object, pos]*

  Block: remove *[ pos, generateItem[true/false] ]*
  Block: create *[ pos, block_type, properties ]*

  Entity: spawn *[ent_type, pos]*
  Entity: data *[ent_type, pos]*

  Audio: sound play *[aud_id ]*
  Audio: music play *[aud_id ]*

  Animation: Play *[ object, anim_name, ignoreIfPlaying[true/false] ]*
  Animation: Set flip sprite state *[ isY[true/false], isFlip[true/false] ]*

  Event: emit *[name ]*
