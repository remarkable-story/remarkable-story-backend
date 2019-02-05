
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stories').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('stories').insert([
        {title: 'Helping in Philippines', description: "Lorem ipsum dolor sit amet, sit inermis liberavisse at, ludus mucius et qui, in vel tale disputando. Vix ex eleifend consequuntur, ea pro lucilius legendos constituto. Ne tacimates intellegebat vis, vel magna cotidieque ad, fastidii dissentias ea vix! In sea noster molestiae, purto dissentiet at ius! Vim natum dicit at, et doctus gubergren contentiones mea.", story: "Lorem ipsum dolor sit amet, per nibh solet laoreet in, ius wisi blandit eleifend in. Usu at tale vocent iracundia? Homero libris nostrum ad vim, in sed vocibus posidonium, usu ei quod eloquentiam. Qui dolore libris cu! Commodo splendide sea ne, consequat adolescens reprehendunt cum ne? Te movet prompta legendos has, vix hinc torquatos ne, clita legimus petentium mea eu! Sumo causae invenire cum id, no dico ipsum nec. Ea habeo delectus vim. Id natum repudiandae mel, feugiat molestie recusabo no ius? His quidam eruditi dolorum ex, vide porro id per, partem corpora temporibus quo ad! Eam at mutat primis timeam! Eu nostrud periculis vix. Nostrum philosophia nam et, eos noster utroque ceteros cu. No stet facer invidunt nec, etiam petentium in usu! Ut usu possit voluptatibus signiferumque? Nisl erant vel in! Legendos gubergren evertitur cu sit, volumus hendrerit interpretaris eu ius. In mei quis alienum appellantur! Eu latine mediocrem elaboraret per? Ludus iriure id has, cu alii ceteros vulputate ius. Pri error aperiri an. Id ignota menandri scribentur mei, melius ceteros pro ne. Vis causae eligendi fabellas et, doming causae neglegentur no eum? Quas persius vivendo nec ex, has at sadipscing consequuntur, eos ei vulputate persecuti. Vel ex dico.", date: 'Jan 1, 2018', country: 'Philippines'},
        {title: 'Helping in Peru', description: "Lorem ipsum dolor sit amet, sit inermis liberavisse at, ludus mucius et qui, in vel tale disputando. Vix ex eleifend consequuntur, ea pro lucilius legendos constituto. Ne tacimates intellegebat vis, vel magna cotidieque ad, fastidii dissentias ea vix! In sea noster molestiae, purto dissentiet at ius! Vim natum dicit at, et doctus gubergren contentiones mea.", story: "Lorem ipsum dolor sit amet, per nibh solet laoreet in, ius wisi blandit eleifend in. Usu at tale vocent iracundia? Homero libris nostrum ad vim, in sed vocibus posidonium, usu ei quod eloquentiam. Qui dolore libris cu! Commodo splendide sea ne, consequat adolescens reprehendunt cum ne? Te movet prompta legendos has, vix hinc torquatos ne, clita legimus petentium mea eu! Sumo causae invenire cum id, no dico ipsum nec. Ea habeo delectus vim. Id natum repudiandae mel, feugiat molestie recusabo no ius? His quidam eruditi dolorum ex, vide porro id per, partem corpora temporibus quo ad! Eam at mutat primis timeam! Eu nostrud periculis vix. Nostrum philosophia nam et, eos noster utroque ceteros cu. No stet facer invidunt nec, etiam petentium in usu! Ut usu possit voluptatibus signiferumque? Nisl erant vel in! Legendos gubergren evertitur cu sit, volumus hendrerit interpretaris eu ius. In mei quis alienum appellantur! Eu latine mediocrem elaboraret per? Ludus iriure id has, cu alii ceteros vulputate ius. Pri error aperiri an. Id ignota menandri scribentur mei, melius ceteros pro ne. Vis causae eligendi fabellas et, doming causae neglegentur no eum? Quas persius vivendo nec ex, has at sadipscing consequuntur, eos ei vulputate persecuti. Vel ex dico.", date: 'January 1, 2018', country: 'Peru'},
        {title: 'Helping in China', description: "Lorem ipsum dolor sit amet, sit inermis liberavisse at, ludus mucius et qui, in vel tale disputando. Vix ex eleifend consequuntur, ea pro lucilius legendos constituto. Ne tacimates intellegebat vis, vel magna cotidieque ad, fastidii dissentias ea vix! In sea noster molestiae, purto dissentiet at ius! Vim natum dicit at, et doctus gubergren contentiones mea.", story: "Lorem ipsum dolor sit amet, per nibh solet laoreet in, ius wisi blandit eleifend in. Usu at tale vocent iracundia? Homero libris nostrum ad vim, in sed vocibus posidonium, usu ei quod eloquentiam. Qui dolore libris cu! Commodo splendide sea ne, consequat adolescens reprehendunt cum ne? Te movet prompta legendos has, vix hinc torquatos ne, clita legimus petentium mea eu! Sumo causae invenire cum id, no dico ipsum nec. Ea habeo delectus vim. Id natum repudiandae mel, feugiat molestie recusabo no ius? His quidam eruditi dolorum ex, vide porro id per, partem corpora temporibus quo ad! Eam at mutat primis timeam! Eu nostrud periculis vix. Nostrum philosophia nam et, eos noster utroque ceteros cu. No stet facer invidunt nec, etiam petentium in usu! Ut usu possit voluptatibus signiferumque? Nisl erant vel in! Legendos gubergren evertitur cu sit, volumus hendrerit interpretaris eu ius. In mei quis alienum appellantur! Eu latine mediocrem elaboraret per? Ludus iriure id has, cu alii ceteros vulputate ius. Pri error aperiri an. Id ignota menandri scribentur mei, melius ceteros pro ne. Vis causae eligendi fabellas et, doming causae neglegentur no eum? Quas persius vivendo nec ex, has at sadipscing consequuntur, eos ei vulputate persecuti. Vel ex dico.", date: 'Feb 1, 2018', country: 'China'}
      ]);
    });
};
