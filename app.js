// ab hmn task kia bnana h. sbse phle hmare ps ek prompt bne ga us prompt mnn user apna city insert krega. ab dsri
// jgah hmare ps ek array bni hgi jsmn kuch cities k name store hnge ab hmn ye check krwna h k user ne prompt mn jo
// city name insert kia h kia wo city name us array k under mojud h agr mjud h t mn ek alert show krwaoun found
// otherwise not found show krwa dun. ab hm strt krnge:

//                this is sir method:
// let match  = false
// let userCity = prompt("Enter your City Name:")
// let arr = ['Karachi', 'Islamabad', 'Hyderabad', 'Lahore', 'Quetta']
// ab hmn kia krna h check krana h k agr city h t found nh t not found t yni k if wli condition lge gi.

// if(userCity == arr) {
//     alert('found')
// }

// ab yhn hmne kia krdia h hmne kaha k agr prompt equal h arr k to alert show krwna lkn yhn t prompt equal hi nh h arr
// t phr kse alert show hga q k ye condition hmari nzr mn thk nzr aarh h mgr ye thk h nh q k prompt mn koi ek city hga
// or array mn ek se zyada. t ye brabar nh. islye yhn bh hm loop chlaenge jsmn srf i k brabar hga puri array k nh. 

// for(let i = 0; i < arr.length; i++) {
//     if(userCity == arr[i]) {
//         alert('found')
//     }
// }

// ab yhn tk t kaam blkl thk h lkn ab hm chahte hn k jb koi city match na ho tb ye not found print krwe t iske lye hm
// else bh lgate hn jo k if k sth hi aata h q k else k bgher if aaskta h lkn if k bgher else nh aaskta.

// for(let i = 0; i < arr.length; i++) {
//     if(userCity == arr[i]) {
//         alert('found')
//     }

//     else{
//         alert('not found')
//     }
// }

// ab yhn kia msla hrh th k jb hmne else ki condition rkhi t else ka mtlb kia h k condition false hna yni k array mn
// srf ek city nh h blke itne saare city hn ab loop kia krrha h jse k user ne agr karachi insert kia h t wo phle nmbr
// pr h is wjah se loop ne check kia k i ki value jb 0 h t wo 0 index pe check krega ab agr oose 0 index pe hi 
// karachi ml gya t wo found t print krdga but next step pe q k increment bh hrh h js wjah se oose islamabad ml rh h
// ab q k islamabad arr ka index h lkn wo userCity k equal nh h js wjah se ye code if se bahar nkl k else pe chla
// jaega or usne ek mrtba phr popup show kia jspe not found th ab dbara increment hwa or city hyderabad hgya ab ye bh
// usercity k brbr nh h t phr dbara else ka code proceed krega is trhn array ki jtni length hgi ye whn tk not found
// chlata rhega. or dsra msla ye h k agr user ne insert hi lahore kia h t ab kia hga q k i ki value 0 index h jspe
// karachi h or wo user city k brbr nh h js wjah se phle t not found show hga then dbara not found show hga or is trhn
// increment krte krte jb tk index lahore tk nh phnche ga tb tk ye not found hi krta rhega t dsra ye msla bh h. t islye
// ab hmn kia krna h hm oose khna chahte hn k hmn jse hi array mn mjud city mle t if ka code chla k loop se bahar aajao
// or break krdo t hm phle t ye kaam krwaenge k jo code hr step pe aage brhta h t ise t hm break se rok dnge jsse wo
// aage brhne se ruk jaega lkn ek msla t ismn bh hga wo ye k starting k jtne bh not found hn wo chlaega bs baad k not
// found nh chlaega

// for(let i = 0; i < arr.length; i++) {
//     if(userCity == arr[i]) {
//         alert('found')
//         break
//     }

//     else{
//         alert('not found')
//     }
// }

// is break se kia hwa h jb tk condition true nh hrh th wo aage index pe brh rh th js wjah se starting k not found show
// hrh th but jse hi condition true hwi isne if ka code proceed krke yhin pe break krdia js wjah se aage k not found
// ruk gae. lkn ab hmn kia krna h hmn phle k not found bh rokne hn. t yni k yhn msla else krrh h qk ye loop k under
// pra hwa h js ki wjah se jb increment pe code false hrh h t ye not found print krrh js wjah se agr userCity hmare
// array k 1st index se match na hne ki surt mn not found print krrh h t ab hmn ye else htana prega. ab else ko htane ki
// wjah se not found ka code bh htana pra lkn hmn t not found ka code lzmi chahiye else ki help se nh t ksi or ki help
// se .. lkn chahiye zrur. t wo hm flag variable ki help se krnge.or jb else ka code htaenge t ek bra msla t khud hi
// solve hjaega wo ye k jo start or last mn not found not found aarh th or center mn found aarh th t wo cheap lg rh
// th ab wo not founds ht jaenge or srf beech mn se bh found aajaega. or phr jb saari problems resolve hgai th t ek bchi
// wo ye k jb if ka code kaam na kre t kia ho t uske lye t hmne dkh hi lia k flag variables lgenge or wo hmne seekh bh
// lia:

// for(let i = 0; i < arr.length; i++) {
//     if(userCity == arr[i]) {
//         match = true
//         alert('City found')
//         break
//     }
// }

// if(match == false) {
//     alert('City not found')
// }
// ab kia hgya hmara kaam thk trhn se hgya ab hm ek mrtba khud se krne ki koshish krnge.

// let userCity = prompt('Enter your city:')
// let arr = ['karachi', 'islamabad', 'hyderabad', 'peshawar', 'quetta']
// let match = false

// for(let i = 0; i < arr.length; i++) {
//     if(userCity == arr[i]) {
//         match = true
//         alert('City found.')
//         break
//     }
// }

// if(match == false) {
//     alert('Alert! City not found')
// }






//                                        this is my method: which is wrong bcz there is check only first city
// for(let i = 0; i < arr.length; i++) {
//     if(userCity == arr[i]) {
//         alert('found')
//         break
//     }

//     if(userCity != arr[i]) {
//         alert('not found')
//         break
//     }
// }