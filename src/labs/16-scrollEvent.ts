import { fromEvent, map, tap } from "rxjs";

const text = document.createElement("p");
text.innerHTML = `Laborum dolor consectetur amet minim qui est aute ad aute anim consectetur pariatur fugiat duis. Duis cillum do commodo ex cupidatat ex elit proident ex excepteur consequat do ut enim. Quis in ullamco consequat nulla incididunt adipisicing id labore velit do Lorem. In anim exercitation laboris pariatur fugiat. Laborum non ad eiusmod sunt eu dolore deserunt officia.

Labore officia velit reprehenderit do dolor. Enim cillum anim ad qui ex qui ut minim Lorem in aliqua cillum cupidatat ullamco. Proident in do magna minim ipsum ad dolore incididunt. Sunt nisi ullamco laboris nostrud esse enim velit ut duis occaecat est excepteur. Consequat voluptate qui in reprehenderit nulla magna. Elit nisi nisi laboris irure veniam. Irure ea proident deserunt laborum mollit duis veniam nostrud anim minim.

Ex nostrud fugiat id anim amet ipsum do velit exercitation amet incididunt do. Labore velit pariatur amet officia ea reprehenderit exercitation ullamco nostrud duis sint. Dolor cillum adipisicing irure anim ipsum consectetur ut duis. Reprehenderit ea ad labore amet culpa minim velit proident adipisicing ipsum nostrud irure cillum in. Incididunt excepteur ut ullamco reprehenderit quis nulla incididunt duis nulla.

Consequat aliquip excepteur laboris officia ex cillum ex duis aliqua voluptate aliqua ex enim. Voluptate do nisi labore culpa fugiat officia dolore magna laborum eu ea. Deserunt elit exercitation sit nostrud culpa. Esse duis ullamco nostrud occaecat adipisicing labore deserunt ad velit. Et laboris mollit deserunt anim et minim ex voluptate. Non eu adipisicing mollit culpa esse magna.

Velit id amet occaecat duis nulla deserunt. Lorem in sit dolor adipisicing. Non voluptate fugiat do consectetur sint laboris veniam tempor sit est enim aliquip officia. Cillum elit in sunt in eiusmod fugiat sit aliquip incididunt irure nisi. Mollit labore proident minim incididunt.

Proident quis aliquip labore esse magna eiusmod voluptate in ut consectetur labore consectetur. Veniam anim velit commodo anim ipsum laboris officia exercitation magna qui exercitation irure veniam. In dolore qui eiusmod dolor laboris enim Lorem. Cillum excepteur ex dolore reprehenderit dolore deserunt adipisicing. Commodo esse aliquip aute officia cupidatat magna enim laboris labore ut occaecat dolore. Elit mollit reprehenderit cillum mollit do laborum aliqua duis fugiat do velit. Ipsum amet voluptate enim pariatur dolore eu aliqua adipisicing amet cillum quis fugiat labore.

Do pariatur est voluptate ipsum do eiusmod et tempor eiusmod quis. Aliquip cupidatat adipisicing voluptate eu ut incididunt eiusmod sint. Sunt aliqua ut culpa excepteur nostrud commodo.

In ullamco enim sint amet ut ea excepteur non minim sit ullamco laboris quis incididunt. Sint ipsum cupidatat cillum laboris dolore sit tempor anim esse elit eiusmod. Laboris eu cillum Lorem labore ut commodo consectetur proident aliquip. Excepteur sunt mollit commodo excepteur nostrud. Et cillum do mollit incididunt veniam commodo Lorem amet ea consequat id dolore consequat. Ea officia ad ex incididunt ad cillum nisi nostrud velit tempor.

Ipsum tempor ad eiusmod fugiat culpa exercitation nulla laboris ipsum ullamco in anim. Velit ea non elit incididunt occaecat commodo do. Dolore veniam eiusmod est ipsum nisi sunt consequat est veniam.
<br/>
Irure laborum tempor adipisicing ea ullamco excepteur aliqua. Do aliqua est id deserunt do exercitation pariatur velit eiusmod ea pariatur consequat. Labore qui et nisi pariatur amet ipsum elit elit veniam labore. Ex sunt qui ex dolore consectetur ut non sunt culpa consectetur.

Ut commodo Lorem sunt velit do laborum pariatur labore nulla sint magna sunt ex. Enim elit qui amet fugiat quis. Labore qui exercitation exercitation minim aliquip. Eu qui occaecat id in nisi ut nulla qui aliqua. Magna duis magna velit anim eu do sint cillum velit sunt ex pariatur qui aliquip. Veniam ipsum id cillum amet sunt adipisicing officia duis aute aliqua tempor pariatur fugiat adipisicing.

Nisi aliqua sint ea sit. Deserunt excepteur consequat incididunt ad proident dolor eu adipisicing ipsum. Sint exercitation ullamco aliquip reprehenderit. Et enim dolor occaecat sunt cillum irure ad anim magna non anim velit nisi labore. Proident reprehenderit deserunt adipisicing quis excepteur incididunt sunt aliqua nisi ipsum anim nisi cupidatat sit. Labore ex amet eiusmod laboris. Ullamco sit sint esse do duis ad incididunt ut dolor irure cillum irure exercitation.

Sint officia amet duis in sunt proident ea. Elit aliquip consequat et dolor do et sit tempor dolore reprehenderit quis anim Lorem. Veniam aliquip ut tempor mollit ex duis id laborum est cillum in. Occaecat ad anim id sint laborum laborum. In tempor aliqua consequat ipsum consequat dolore. Officia cupidatat aute ullamco deserunt nisi deserunt tempor quis aliquip nulla elit aliqua excepteur excepteur.

Sint laboris ipsum aliquip labore amet enim consectetur irure qui. Dolore nisi non ut laboris pariatur. Tempor proident aliqua consectetur enim pariatur consequat adipisicing qui adipisicing. Mollit laboris adipisicing sit eiusmod ipsum est fugiat adipisicing anim dolore minim est cupidatat. Eiusmod proident anim minim sint. Voluptate aliqua mollit esse in culpa exercitation nulla est reprehenderit reprehenderit. Sunt dolor incididunt ea ut.

Quis occaecat officia duis eu voluptate incididunt consectetur eu proident. Cupidatat sunt esse eiusmod in quis id aliqua amet. Minim aute officia nulla in. Amet velit sit mollit duis in id dolor id tempor sit.

Laboris aute ea qui incididunt sit sunt. Labore sint Lorem dolore est commodo quis excepteur labore anim. Anim tempor adipisicing veniam nisi irure minim commodo ex. Voluptate anim ullamco sint ex nisi ullamco exercitation irure esse anim do consequat. Ea culpa voluptate id mollit consequat commodo incididunt. Labore ea velit nisi culpa sunt laborum labore ex et laborum anim exercitation adipisicing laboris. Eiusmod eu exercitation ea reprehenderit.

Et incididunt eiusmod elit deserunt adipisicing. Cupidatat aliquip eu laborum mollit adipisicing minim dolore laborum ea. Irure sit cillum do ex laborum qui sint ad id do mollit dolore. Quis reprehenderit consequat dolor et. Est in incididunt laborum fugiat aute tempor sunt fugiat reprehenderit eiusmod ad velit nisi. Velit cupidatat culpa exercitation id ea Lorem veniam fugiat ullamco nulla mollit Lorem elit enim. Lorem consequat nulla aliqua dolor elit nisi ipsum labore mollit sit aute.

Laboris consequat fugiat magna sint excepteur in deserunt eiusmod exercitation pariatur commodo. Mollit ea aliqua ut pariatur aliquip aute exercitation enim. Laborum nostrud exercitation quis ipsum cillum eiusmod. Adipisicing proident voluptate commodo id in do quis reprehenderit mollit. Culpa adipisicing officia nulla consectetur excepteur nulla ipsum ut deserunt dolor eiusmod. Dolore officia ut dolore sit incididunt duis nostrud ad eiusmod magna commodo excepteur.

Velit dolor dolore consequat ex exercitation commodo veniam esse eiusmod. Laborum anim minim nisi veniam anim officia. Excepteur quis quis amet fugiat deserunt. Mollit pariatur anim reprehenderit adipisicing.<br/>
Laborum dolor consectetur amet minim qui est aute ad aute anim consectetur pariatur fugiat duis. Duis cillum do commodo ex cupidatat ex elit proident ex excepteur consequat do ut enim. Quis in ullamco consequat nulla incididunt adipisicing id labore velit do Lorem. In anim exercitation laboris pariatur fugiat. Laborum non ad eiusmod sunt eu dolore deserunt officia.

Labore officia velit reprehenderit do dolor. Enim cillum anim ad qui ex qui ut minim Lorem in aliqua cillum cupidatat ullamco. Proident in do magna minim ipsum ad dolore incididunt. Sunt nisi ullamco laboris nostrud esse enim velit ut duis occaecat est excepteur. Consequat voluptate qui in reprehenderit nulla magna. Elit nisi nisi laboris irure veniam. Irure ea proident deserunt laborum mollit duis veniam nostrud anim minim.

Ex nostrud fugiat id anim amet ipsum do velit exercitation amet incididunt do. Labore velit pariatur amet officia ea reprehenderit exercitation ullamco nostrud duis sint. Dolor cillum adipisicing irure anim ipsum consectetur ut duis. Reprehenderit ea ad labore amet culpa minim velit proident adipisicing ipsum nostrud irure cillum in. Incididunt excepteur ut ullamco reprehenderit quis nulla incididunt duis nulla.

Consequat aliquip excepteur laboris officia ex cillum ex duis aliqua voluptate aliqua ex enim. Voluptate do nisi labore culpa fugiat officia dolore magna laborum eu ea. Deserunt elit exercitation sit nostrud culpa. Esse duis ullamco nostrud occaecat adipisicing labore deserunt ad velit. Et laboris mollit deserunt anim et minim ex voluptate. Non eu adipisicing mollit culpa esse magna.

Velit id amet occaecat duis nulla deserunt. Lorem in sit dolor adipisicing. Non voluptate fugiat do consectetur sint laboris veniam tempor sit est enim aliquip officia. Cillum elit in sunt in eiusmod fugiat sit aliquip incididunt irure nisi. Mollit labore proident minim incididunt.

Proident quis aliquip labore esse magna eiusmod voluptate in ut consectetur labore consectetur. Veniam anim velit commodo anim ipsum laboris officia exercitation magna qui exercitation irure veniam. In dolore qui eiusmod dolor laboris enim Lorem. Cillum excepteur ex dolore reprehenderit dolore deserunt adipisicing. Commodo esse aliquip aute officia cupidatat magna enim laboris labore ut occaecat dolore. Elit mollit reprehenderit cillum mollit do laborum aliqua duis fugiat do velit. Ipsum amet voluptate enim pariatur dolore eu aliqua adipisicing amet cillum quis fugiat labore.

Do pariatur est voluptate ipsum do eiusmod et tempor eiusmod quis. Aliquip cupidatat adipisicing voluptate eu ut incididunt eiusmod sint. Sunt aliqua ut culpa excepteur nostrud commodo.

In ullamco enim sint amet ut ea excepteur non minim sit ullamco laboris quis incididunt. Sint ipsum cupidatat cillum laboris dolore sit tempor anim esse elit eiusmod. Laboris eu cillum Lorem labore ut commodo consectetur proident aliquip. Excepteur sunt mollit commodo excepteur nostrud. Et cillum do mollit incididunt veniam commodo Lorem amet ea consequat id dolore consequat. Ea officia ad ex incididunt ad cillum nisi nostrud velit tempor.

Ipsum tempor ad eiusmod fugiat culpa exercitation nulla laboris ipsum ullamco in anim. Velit ea non elit incididunt occaecat commodo do. Dolore veniam eiusmod est ipsum nisi sunt consequat est veniam.
<br/>
Irure laborum tempor adipisicing ea ullamco excepteur aliqua. Do aliqua est id deserunt do exercitation pariatur velit eiusmod ea pariatur consequat. Labore qui et nisi pariatur amet ipsum elit elit veniam labore. Ex sunt qui ex dolore consectetur ut non sunt culpa consectetur.

Ut commodo Lorem sunt velit do laborum pariatur labore nulla sint magna sunt ex. Enim elit qui amet fugiat quis. Labore qui exercitation exercitation minim aliquip. Eu qui occaecat id in nisi ut nulla qui aliqua. Magna duis magna velit anim eu do sint cillum velit sunt ex pariatur qui aliquip. Veniam ipsum id cillum amet sunt adipisicing officia duis aute aliqua tempor pariatur fugiat adipisicing.

Nisi aliqua sint ea sit. Deserunt excepteur consequat incididunt ad proident dolor eu adipisicing ipsum. Sint exercitation ullamco aliquip reprehenderit. Et enim dolor occaecat sunt cillum irure ad anim magna non anim velit nisi labore. Proident reprehenderit deserunt adipisicing quis excepteur incididunt sunt aliqua nisi ipsum anim nisi cupidatat sit. Labore ex amet eiusmod laboris. Ullamco sit sint esse do duis ad incididunt ut dolor irure cillum irure exercitation.

Sint officia amet duis in sunt proident ea. Elit aliquip consequat et dolor do et sit tempor dolore reprehenderit quis anim Lorem. Veniam aliquip ut tempor mollit ex duis id laborum est cillum in. Occaecat ad anim id sint laborum laborum. In tempor aliqua consequat ipsum consequat dolore. Officia cupidatat aute ullamco deserunt nisi deserunt tempor quis aliquip nulla elit aliqua excepteur excepteur.

Sint laboris ipsum aliquip labore amet enim consectetur irure qui. Dolore nisi non ut laboris pariatur. Tempor proident aliqua consectetur enim pariatur consequat adipisicing qui adipisicing. Mollit laboris adipisicing sit eiusmod ipsum est fugiat adipisicing anim dolore minim est cupidatat. Eiusmod proident anim minim sint. Voluptate aliqua mollit esse in culpa exercitation nulla est reprehenderit reprehenderit. Sunt dolor incididunt ea ut.

Quis occaecat officia duis eu voluptate incididunt consectetur eu proident. Cupidatat sunt esse eiusmod in quis id aliqua amet. Minim aute officia nulla in. Amet velit sit mollit duis in id dolor id tempor sit.

Laboris aute ea qui incididunt sit sunt. Labore sint Lorem dolore est commodo quis excepteur labore anim. Anim tempor adipisicing veniam nisi irure minim commodo ex. Voluptate anim ullamco sint ex nisi ullamco exercitation irure esse anim do consequat. Ea culpa voluptate id mollit consequat commodo incididunt. Labore ea velit nisi culpa sunt laborum labore ex et laborum anim exercitation adipisicing laboris. Eiusmod eu exercitation ea reprehenderit.

Et incididunt eiusmod elit deserunt adipisicing. Cupidatat aliquip eu laborum mollit adipisicing minim dolore laborum ea. Irure sit cillum do ex laborum qui sint ad id do mollit dolore. Quis reprehenderit consequat dolor et. Est in incididunt laborum fugiat aute tempor sunt fugiat reprehenderit eiusmod ad velit nisi. Velit cupidatat culpa exercitation id ea Lorem veniam fugiat ullamco nulla mollit Lorem elit enim. Lorem consequat nulla aliqua dolor elit nisi ipsum labore mollit sit aute.

Laboris consequat fugiat magna sint excepteur in deserunt eiusmod exercitation pariatur commodo. Mollit ea aliqua ut pariatur aliquip aute exercitation enim. Laborum nostrud exercitation quis ipsum cillum eiusmod. Adipisicing proident voluptate commodo id in do quis reprehenderit mollit. Culpa adipisicing officia nulla consectetur excepteur nulla ipsum ut deserunt dolor eiusmod. Dolore officia ut dolore sit incididunt duis nostrud ad eiusmod magna commodo excepteur.

Velit dolor dolore consequat ex exercitation commodo veniam esse eiusmod. Laborum anim minim nisi veniam anim officia. Excepteur quis quis amet fugiat deserunt. Mollit pariatur anim reprehenderit adipisicing.
`;

const percentScroll = (event) => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};
const body = document.querySelector("body");
body.append(text);

const progressBar = document.createElement("div");
progressBar.classList.add("progress-bar");

body.append(progressBar);

const scroll$ = fromEvent<Event>(document, "scroll");

const progress = scroll$.pipe(
  map((event) => {
    return percentScroll(event);
  }),
  tap(console.log)
);

progress.subscribe((percentage) => {
  progressBar.style.width = `${percentage}%`;
});
