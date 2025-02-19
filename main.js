let name = document.querySelector('.name1');
let h2 = document.querySelector('h2')
let pass = document.querySelector('.pass1');
let all = document.querySelector('.all');
let login = document.querySelector('.log_in');
let name_product = document.querySelector('.name_product');
let type_product = document.querySelector('.type_product');
let price = document.querySelector('.price');
let taxes = document.querySelector('.taxes');
let number = document.querySelector('.number');
let wrapper = document.querySelector('.wrapper')
let ptn = document.querySelector('.ptn');
let label = document.querySelector('.label');
let show_product = document.querySelector('.show_product');
let search = document.querySelector('.search');
let search_name = document.querySelector('.search_name');
let search_type = document.querySelector('.search_type');
let all_product = document.querySelector('.all_product');
let tbody = document.querySelector('.tbody');
let deleteall = document.querySelector('.deleteall');
let DeleteAll = document.querySelector('.DeleteAll');
let name_client = document.querySelector('.name_client')
let number_client = document.querySelector('.number_client')
let infoz = document.querySelector('.infoz')
let valuex = document.querySelector('.valuex')
let save_client = document.querySelector('.save_client')
let show_client = document.querySelector('.show_client')
let search_client = document.querySelector('.search_client');
let client_data = document.querySelector('.client_data')
let tbody1 = document.querySelector('.tbody1');
let ktbody = document.querySelector('.ktbody');
let discont = document.querySelector('.discont')
let disvalue = document.querySelector('.disvalue')
let alvalue = document.querySelector('.alvalue')
let asave = document.querySelector('.asave')
let rd = 0;
let dis = 0;
let ktbody1 = document.querySelector('.ktbody1');
let ttbody = document.querySelector('.ttbody');
let discont1 = document.querySelector('.discont1')
let disvalue1 = document.querySelector('.disvalue1')
let alvalue1 = document.querySelector('.alvalue1')
let asave1 = document.querySelector('.asave1')
let client = document.querySelector('.client')
let updatup = document.querySelector('.updatup')
let enter_client = document.querySelector('.enter_client')
let newuser = document.querySelector('.newuser')
let newpass = document.querySelector('.newpass')
let oldpass = document.querySelector('.oldpass')
let userpass = document.querySelector('.userpass')
let sarial = document.querySelector('.sarial');
// let activeapp = document.querySelector('.activeapp')
let add_customers = document.querySelector('.add_customers')
let customers = document.querySelector('.customers')
let ptn_customer = document.querySelector('.ptn_customer')
let search_customer = document.querySelector('.search_customer')
let allInformionClinet = document.querySelector('.allInformionClinet')


let r1 = document.querySelector('.r1')
let r2 = document.querySelector('.r2')
let r3 = document.querySelector('.r3')
let r4 = document.querySelector('.r4')
let r5 = document.querySelector('.r5')
let k1 = document.querySelector('.k1')
let k2 = document.querySelector('.k2')
let k3 = document.querySelector('.k3')
let k4 = document.querySelector('.k4')
let k7 = document.querySelector('.k7')
let k5 = document.querySelector('.k5')
let j1 = document.querySelector('.j1')
let j2 = document.querySelector('.j2')
let j3 = document.querySelector('.j3')
let j4 = document.querySelector('.j4')
let k6 = document.querySelector('.k6')
let c2 = document.querySelector('.c2')
let c1 = document.querySelector('.c1')
let c4 = document.querySelector('.c4')
let j5 = document.querySelector('.j5')
let j6 = document.querySelector('.j6')
let data = document.querySelector('.data')
let print1 = document.querySelector('.print')
let title = document.querySelector('.title')
let newinvoice = document.querySelector('.new_invoice')
let rptn = document.querySelector('.rptn')
let tbody2 = document.querySelector('.tbody2')
let autocom = document.querySelector('.autocom-box')
let xautocom = document.querySelector('.xautocom-box')
let ar = document.querySelector('.ar')
let open1 = document.querySelector('.open')
let ptn_invoice = document.querySelector('.ptn_invoice')
let new_invoice = document.querySelector('.new_invoice')
let list_invoice = document.querySelector('.list_invoice')
let ptn_invoices = document.querySelector('.ptn_invoices')
let operationmod = 'create';
let reset = document.querySelector('.reset')
let o;
let data_client;
let operation = 'create';
let search_mod = 'name';
let xsearch_mod = 'name';
let dad;
let dad1;
let x;
let vx;
let activecode = ''
if (localStorage.user == null || localStorage.passw == null) {
    localStorage.user = 'admin'
    localStorage.passw = 'admin'
}

if (localStorage.p1 == null || localStorage.p1 == null || localStorage.p3 == null) {
    localStorage.p1 = 'المخزن'
    localStorage.p2 = 'none'
    localStorage.p3 = 'none'

}
if (localStorage.p1 == 'المخزن' || localStorage.p2 == 'none' || localStorage.p3 == 'none') {
    alert(' برجاء الدخول الي قسم بيانات المنفذ وإضافة اسم المنفذ والرقم الخاص به والعنوان')
}
let z1 = localStorage.p1
let z2 = localStorage.p2
let z3 = localStorage.p3
h2.innerHTML = z1
title.innerHTML = z1

function vchang() {
    if (c1.value != '' && c2.value != '' || c4.value != '') {
        localStorage.p1 = c1.value
        localStorage.p2 = c2.value
        localStorage.p3 = c4.value
        c2.value = ''
        c1.value = ''
        c4.value = ''

    } else {
        alert('اكمل الحقول الفارغه')
    }
}
let user = localStorage.user;
let passw = localStorage.passw;
if (user == 'admin' && passw == 'admin') {
    // activeapp.style.display = 'block'
    login.style.display = 'none '
} else {
    login.style.display = 'block'
    activeapp.style.display = 'none'
}

function active() {
    // if (sarial.value == activecode) {
        login.style.display = 'block'
        // activeapp.style.display = 'none'
    // } else {
    //     alert('تواصل مع المطور للحصول علي  كود التفعيل')
    // }
}
active() 
let w1 = document.querySelector('.w1')
let k8 = document.querySelector('.k8')
window.onscroll = function() {
    w1.style.display = 'none'
    k5.style.display = 'none'
    k6.style.display = 'none'
    k7.style.display = 'none'
    k8.style.display = 'none'
    if (scrollY <= 15) {
        k7.style.display = 'block'
        w1.style.display = 'block'
        k6.style.display = 'block'
        k5.style.display = 'block'
        k8.style.display = 'block'
    }
}



window.onkeyup = function number() {
    if (name.value.length > 2) {
        name.style.border = '3px solid green';
    } else {
        name.style.border = '3px solid red';
    }
    if (pass.value.length > 2) {
        pass.style.border = '3px solid green';
    } else {
        pass.style.border = '3px solid red';
    }
}
window.onload = window.onkeyup



function chang2() {
    if (oldpass.value == localStorage.passw) {
        if (newuser.value != '' && newpass.value != '' && newuser.value != 'admin' && newpass.value != 'admin') {
            localStorage.user = newuser.value
            localStorage.passw = newpass.value
            let user = localStorage.user;
            let passw = localStorage.passw;
            alert('تم تغير بيناتك بنجاح')
        }
        if (newuser.value == 'admin' || newpass.value == 'admin') {
            newuser.style.border = '3px solid red';
            newpass.style.border = '3px solid red';
            alert('لا يمكن استخدام هاتان الكلمتان في اسم المستخدم او الباسورد')
        } else {
            if (newuser.value == '' && newpass.value == '') {
                newuser.style.border = '3px solid red';
                newpass.style.border = '3px solid red';
                alert('لا يمكن ترك هذه الحقول فارغه')
            } else {
                if (newuser.value == '') {
                    newuser.style.border = '3px solid red';
                    alert('لا يمكن ترك هذا الحقل فارغ')
                } else {
                    newuser.style.border = '3px solid green';
                }

                if (newpass.value == '') {
                    newpass.style.border = '3px solid red';
                    alert('لا يمكن ترك هذا الحقل فارغ')
                } else {
                    newpass.style.border = '3px solid green';
                }
            }


        }
        oldpass.style.border = '3px solid green';
    } else {
        oldpass.style.border = '3px solid red';

        alert('كلمة المرور غير صيحه')
    }
    all_product.style.display = 'none';
}

function clearxx() {
    newpass.value = ''
    newuser.value = ''
    oldpass.value = ''

}

function show() {
    all_product.style.display = 'block';
    all.style.display = 'none';
    ptn_invoices.style.display = 'none';
    new_invoice.style.display = 'none';
    list_invoice.style.display = 'none';
    client.style.display = 'none'
    client_data.style.display = 'none';
    add_customers.style.display = 'none';
    customers.style.display = 'none';
    ptn_customer.style.display = 'none';
    show_data_pro()
    location2 = 'all_product'
    localStorage.location2 = location2
    data.style.display = 'none';
}

function rer() {
    all_product.style.display = 'none';
    all.style.display = 'none';
    client.style.display = 'none'
    client_data.style.display = 'none';
    userpass.style.display = 'none'
    add_customers.style.display = 'none';
    customers.style.display = 'none';
    ptn_customer.style.display = 'none';
    location2 = 'rar'
    data.style.display = 'block';
    localStorage.location2 = location2
    ptn_invoices.style.display = 'none';
    new_invoice.style.display = 'none';
    list_invoice.style.display = 'none';
}

function enter() {
    all_product.style.display = 'none';
    all.style.display = 'block';
    client.style.display = 'none'
    client_data.style.display = 'none';
    userpass.style.display = 'none'
    add_customers.style.display = 'none';
    customers.style.display = 'none';
    ptn_customer.style.display = 'none';
    location2 = 'all'
    cheks()
    localStorage.location2 = location2
    ptn_invoices.style.display = 'none';
    new_invoice.style.display = 'none';
    data.style.display = 'none';
    list_invoice.style.display = 'none';
}

function defcult() {
    alert('تم اعادة تعين اسم المستخدم وكلمة المرور')
    localStorage.user = 'admin'
    localStorage.passw = 'admin'
    let user = localStorage.user;
    let passw = localStorage.passw;
}

function chang() {
    userpass.style.display = 'block';
    all_product.style.display = 'none';
    all.style.display = 'none';
    client.style.display = 'none'
    data.style.display = 'none';
    client_data.style.display = 'none'
    add_customers.style.display = 'none';
    customers.style.display = 'none';
    ptn_customer.style.display = 'none';
    location2 = 'userpass'
    clearxx()
    localStorage.location2 = location2
    ptn_invoices.style.display = 'none';
    new_invoice.style.display = 'none';
    list_invoice.style.display = 'none';
}

function p1() {
    userpass.style.display = 'none';
    all_product.style.display = 'none';
    all.style.display = 'none';
    client.style.display = 'none'
    client_data.style.display = 'none'
    add_customers.style.display = 'none';
    customers.style.display = 'none';
    ptn_customer.style.display = 'none';
    ptn_invoices.style.display = 'flex';
    data.style.display = 'none';
    new_invoice.style.display = 'none';
    list_invoice.style.display = 'none';
    location2 = 'ptn_invoices'
    localStorage.location2 = location2
}

function p2() {
    userpass.style.display = 'none';
    all_product.style.display = 'none';
    all.style.display = 'none';
    client.style.display = 'none'
    client_data.style.display = 'none'
    add_customers.style.display = 'none';
    customers.style.display = 'none';
    ptn_customer.style.display = 'none';
    ptn_invoices.style.display = 'none';
    new_invoice.style.display = 'block';
    list_invoice.style.display = 'none';
    data.style.display = 'none';
    location2 = 'new_invoice'
    localStorage.location2 = location2
}

function p3() {
    userpass.style.display = 'none';
    all_product.style.display = 'none';
    all.style.display = 'none';
    client.style.display = 'none'
    client_data.style.display = 'none'
    add_customers.style.display = 'none';
    customers.style.display = 'none';
    ptn_customer.style.display = 'none';
    ptn_invoices.style.display = 'none';
    data.style.display = 'none';
    new_invoice.style.display = 'none';
    list_invoice.style.display = 'block';
    location2 = 'list_invoice'
    localStorage.location2 = location2
    rh()
}

let data_pro;
if (localStorage.product != null) {
    data_pro = JSON.parse(localStorage.product)
} else {
    data_pro = []
}

function save() {
    let new_data = {
        name: name_product.value.toLowerCase(),
        type: type_product.value.toLowerCase(),
        price: price.value,
        taxes: taxes.value,
        number: number.value,
    }
    if (name_product.value != '' && type_product.value != '' && price.value != '') {
        if (operation == 'create') {
            if (namesproduct.includes(name_product.value.toLowerCase())) {
                alert('هذا المنتج موجود فى المخزن قم بالدخول الى المخزن لتعديله')
            } else {


                data_pro.push(new_data)
                clear()
            }
        } else {
            data_pro[x] = new_data
            ptn.innerHTML = 'أحفظ'
            all_product.style.display = 'block';
            all.style.display = 'none';
            operation = 'create'

            show_data_pro()
            clear()
        }

        localStorage.setItem('product', JSON.stringify(data_pro))


    } else {
        alert('تأكد من صحة البيانات المدخله او الخانات المتروكه')


    }


}
let namesproduct = []
let nameproduct;
for (let i = 0; i < data_pro.length; i++) {
    nameproduct = data_pro[i].name
    namesproduct.push(nameproduct)

}
let probox = document.querySelector('.probox')
let ccc;

function prosearch(value) {
    probox.innerHTML = ''
    probox.style.display = 'block'

    for (let i = 0; i < namesproduct.length; i++) {
        if (namesproduct[i].includes(value.toLowerCase())) {
            let akm = namesproduct[i]
            dad = document.createElement("li");
            dad.onclick = function() {
                k4.value = akm
                checkz()
                probox.style.display = 'none'
                k5.value = data_pro[i].price
                ccc = i
                let exsit = data_pro[ccc].number
                k6.placeholder = 'العدد المتوافر من هذا المنتج    ' + exsit;
            }
            dad1 = document.createTextNode(akm);
            dad.appendChild(dad1);
            probox.appendChild(dad);
        }
    }


}




function cheks() {
    if (name_product.value != '') {
        name_product.style.border = '3px solid green';
    } else {
        name_product.style.border = '3px solid red';
    }
    if (type_product.value != '') {
        type_product.style.border = '3px solid green';
    } else {
        type_product.style.border = '3px solid red';
    }
    if (price.value != '') {
        price.style.border = '3px solid green';
    } else {
        price.style.border = '3px solid red';
    }
}

function show_data_pro() {
    let datax = ''
    for (let i = 0; i < data_pro.length; i++) {
        datax += `
<tr>
<td>${+[i]+1}</td>
<td>${data_pro[i].name}</td>
<td>${data_pro[i].type}</td>
<td>${data_pro[i].price}</td>
<td>${data_pro[i].taxes}</td>
<td>${data_pro[i].number}</td>
<td><button class="updat" onclick="updat(${i})" type="submit">تعديل</button>
</td>
<td><button class="delete" onclick="delete_one(${i})" type="submit">حذف</button>
</td>
</tr>
`
        tbody.innerHTML = datax;
    }
    deleteall.style.display = 'none'
    if (data_pro.length > 0) {
        deleteall.innerHTML = `  
<hr class="hr">
<button class="DeleteAll" ondblclick="clearall()" type="submit">حذف كل المتجات (${data_pro.length})</button>
<hr class="hr">
`
    }
}

function delete_one(i) {
    data_pro.splice(i, 1)
    localStorage.product = JSON.stringify(data_pro)
    show_data_pro()
}

function clearall() {
    localStorage.removeItem('product')
    data_pro.splice(1)
    show_data_pro()
    data_pro.splice(0)
    show_data_pro()

}




function clear() {
    name_product.value = ''
    type_product.value = ''
    price.value = ''
    taxes.value = ''
    number.value = '1'
}

function updat(i) {

    name_product.value = data_pro[i].name
    type_product.value = data_pro[i].type
    price.value = data_pro[i].price
    taxes.value = data_pro[i].taxes
    number.value = data_pro[i].number
    x = i
    ptn.innerHTML = 'تعديل'
    all_product.style.display = 'none';
    all.style.display = 'block';
    operation = 'updat'

    if (name_product.value != '') {
        name_product.style.border = '3px solid green';

    } else {
        name_product.style.border = '3px solid red';

    }

    if (type_product.value != '') {
        type_product.style.border = '3px solid green';
    } else {
        type_product.style.border = '3px solid red';
    }
    if (price.value != '') {
        price.style.border = '3px solid green';
    } else {
        price.style.border = '3px solid red';

    }
}

function searchmod(value) {

    if (value == 'name') {

        search_mod = 'name'
        search.placeholder = 'بحث عن طريق الاسم';
    } else {
        search_mod = 'type'
        search.placeholder = 'بحث عن طريق النوع';
    }
    search.value = ''
    deleteall.style.display = 'none'
    show_data_pro()
    search.focus()
}
window.ondblclick = function() {
    reset.style.display = 'block'
    deleteall.style.display = 'block'
}

function search_product(value) {

    let datax = '';

    for (let i = 0; i < data_pro.length; i++) {
        if (search_mod == 'name') {
            if (data_pro[i].name.includes(value.toLowerCase())) {
                datax += `
<tr>
  <td>${+[i]+1}</td>
  <td>${data_pro[i].name}</td>
  <td>${data_pro[i].type}</td>
  <td>${data_pro[i].price}</td>
  <td>${data_pro[i].taxes}</td>
  <td>${data_pro[i].number}</td>
  <td><button class="updat" onclick="updat(${i})" type="submit">تعديل</button>
  </td>
  <td><button class="delete" onclick="delete_one(${i})" type="submit">حذف</button>
  </td>
</tr>
  `
            }
        }
        if (search_mod == 'type') {
            if (data_pro[i].type.includes(value.toLowerCase())) {
                datax += `
<tr>
  <td>${+[i]+1}</td>
  <td>${data_pro[i].name}</td>
  <td>${data_pro[i].type}</td>
  <td>${data_pro[i].price}</td>
  <td>${data_pro[i].taxes}</td>
  <td>${data_pro[i].number}</td>
  <td><button class="updat" onclick="updat(${i})" type="submit">تعديل</button>
  </td>
  <td><button class="delete" onclick="delete_one(${i})" type="submit">حذف</button>
  </td>
</tr>
  `
            }
        }
        deleteall.style.display = 'none'

        tbody.innerHTML = datax;

    }
}

if (localStorage.product != null) {
    data_pro = JSON.parse(localStorage.product)
} else {
    data_pro = []
}


if (localStorage.client != null) {
    data_client = JSON.parse(localStorage.client)
} else {
    data_client = []

}

let namesclient = []
let nameclient;
for (let i = 0; i < data_client.length; i++) {
    nameclient = data_client[i].name
    namesclient.push(nameclient)

}

function new_clientb() {

    let new_client = {
        name: name_client.value.toLowerCase(),
        infoz: infoz.value,
        valuex: valuex.value,
    }

    if (name_client.value != '' && valuex.value != '') {

        if (data_cust.includes(name_client.value)) {
            if (namesclient.includes(name_client.value)) {
                alert('هذا العميل عليه  اقساط مسبقا')
                name_client.style.border = '3px solid red';
            } else {
                if (operationmod == 'create') {
                    data_client.push(new_client)
                    clear1()

                }
            }
            if (operationmod == 'updat') {
                data_client[o] = new_client
                save_client.innerHTML = 'تسجيل القسط'
                client_data.style.display = 'none'
                client.style.display = 'block'
                operationmod = 'create'
                show_client1()
                clear1()
            }
            localStorage.setItem('client', JSON.stringify(data_client))


        } else {
            name_client.style.border = '3px solid red';

            alert('برجاء التأكد من انه قد تم اضافة العميل مسبقا')
        }
    } else {
        alert('تأكد من صحة البيانات المدخله او الخانات المتروكه')

    }

}






function hide() {
    client_data.style.display = 'none'
    client.style.display = 'block'
    all_product.style.display = 'none'
    all.style.display = 'none'
    userpass.style.display = 'none'
    data.style.display = 'none';
    add_customers.style.display = 'none';
    customers.style.display = 'none';
    ptn_customer.style.display = 'none';
    show_client1()
    location2 = 'client'
    localStorage.location2 = location2
    ptn_invoices.style.display = 'none';
    new_invoice.style.display = 'none';
    list_invoice.style.display = 'none';
}



function clear1() {
    name_client.value = ''
    infoz.value = ''
    valuex.value = ''
}

function show_client1() {

    let dataz = ''
    for (let i = 0; i < data_client.length; i++) {

        dataz += `

<tr>
<td>${+[i]+1}</td>
<td>${data_client[i].name}</td>
<td>${data_client[i].infoz}</td>
<td>${data_client[i].valuex}</td>
<td><button class="updat" onclick="updat_client(${i})" type="submit">تعديل</button>
</td>
<td><button class="delete" onclick="delete_one_client(${i})" type="submit">حذف</button>
</td>
</tr>
`
        tbody1.innerHTML = dataz;

    }

}

function delete_one_client(i) {
    data_client.splice(i, 1)
    localStorage.client = JSON.stringify(data_client)
    show_client1()
}

function updat_client(i) {

    name_client.value = data_client[i].name
    infoz.value = data_client[i].infoz
    valuex.value = data_client[i].valuex
    o = i
    save_client.innerHTML = 'تعديل بيانات العميل'
    client_data.style.display = 'block'
    client.style.display = 'none'

    operationmod = 'updat'

    checkz()
}

function checkz() {
    if (name_client.value != '') {
        name_client.style.border = '3px solid green';

    } else {
        name_client.style.border = '3px solid red';

    }
    if (valuex.value != '') {
        valuex.style.border = '3px solid green';
    } else {
        valuex.style.border = '3px solid red';

    }

}


function oldx() {

    autocom.style.display = 'block'
    client_data.style.display = 'block';
    all.style.display = 'none';
    data.style.display = 'none';

    client.style.display = 'none'
    all_product.style.display = 'none'
    userpass.style.display = 'none'
    add_customers.style.display = 'none';
    customers.style.display = 'none';
    ptn_customer.style.display = 'none';
    location2 = 'client_data'
    localStorage.location2 = location2
    ptn_invoices.style.display = 'none';
    new_invoice.style.display = 'none';
    list_invoice.style.display = 'none';
}







function search_clients(value) {

    let dataz = '';

    for (let i = 0; i < data_client.length; i++) {
        if (data_client[i].name.includes(value.toLowerCase())) {
            dataz += `
  
<tr>
  <td>${+[i]+1}</td>
  <td>${data_client[i].name}</td>
  <td>${data_client[i].infoz}</td>
  <td>${data_client[i].valuex}</td>
  <td><button class="updat" onclick="updat_client(${i})" type="submit">تعديل</button>
  </td>
  <td><button class="delete" onclick="delete_one_client(${i})" type="submit">حذف</button>
  </td>
</tr>
  `
        }

        tbody1.innerHTML = dataz;

    }


}

function m1() {
    add_customers.style.display = 'none';
    customers.style.display = 'none';
    ptn_customer.style.display = 'flex';
    all_product.style.display = 'none';
    all.style.display = 'none';

    client.style.display = 'none'
    client_data.style.display = 'none';
    location2 = 'ptn_customer'
    localStorage.location2 = location2
    ptn_invoices.style.display = 'none';
    new_invoice.style.display = 'none';
    data.style.display = 'none';
    list_invoice.style.display = 'none';

}

function m2() {
    add_customers.style.display = 'block';
    customers.style.display = 'none';
    ptn_customer.style.display = 'none';
    all_product.style.display = 'none';
    all.style.display = 'none';
    ptn_invoices.style.display = 'none';
    new_invoice.style.display = 'none';
    list_invoice.style.display = 'none';
    client.style.display = 'none'
    client_data.style.display = 'none';
    location2 = 'add_customers'
    localStorage.location2 = location2

    data.style.display = 'none';

}

function m3() {
    add_customers.style.display = 'none';
    customers.style.display = 'block';
    ptn_customer.style.display = 'none';
    all_product.style.display = 'none';
    all.style.display = 'none';
    ptn_invoices.style.display = 'none';
    new_invoice.style.display = 'none';
    data.style.display = 'none';
    list_invoice.style.display = 'none';
    client.style.display = 'none'

    client_data.style.display = 'none';
    location2 = 'customers'
    localStorage.location2 = location2

    xshow_data_pro()
}

function xclear() {
    r1.value = ''
    r2.value = ''
    r3.value = ''
    r4.value = ''
    r5.value = ''
}

let xoperation = 'create'

let xdata_pro;
if (localStorage.customers != null) {
    xdata_pro = JSON.parse(localStorage.customers)
} else {
    xdata_pro = []
}



function xsave() {

    let new_data = {
        r1: r1.value,
        r2: r2.value.toLowerCase(),
        r3: r3.value,
        r4: r4.value.toLowerCase(),
        r5: r5.value,
    }
    if (r1.value != '' && r2.value != '' && r3.value != '' && r4.value != '') {
        if (xoperation == 'create') {
            xdata_pro.push(new_data)

        } else {
            xdata_pro[vx] = new_data
            rptn.innerHTML = 'أحفظ'
            customers.style.display = 'block';
            add_customers.style.display = 'none';
            xoperation = 'create'
            xshow_data_pro()
        }
        localStorage.setItem('customers', JSON.stringify(xdata_pro))
        xclear()



    } else {
        alert('تأكد من صحة البيانات المدخله او الخانات المتروكه')


    }

    xcheks()
}

function xcheks() {
    if (r1.value != '') {
        r1.style.border = '3px solid green';
    } else {
        r1.style.border = '3px solid red';
    }
    if (r2.value != '') {
        r2.style.border = '3px solid green';
    } else {
        r2.style.border = '3px solid red';
    }
    if (r3.value != '') {
        r3.style.border = '3px solid green';
    } else {
        r3.style.border = '3px solid red';
    }
    if (r4.value != '') {
        r4.style.border = '3px solid green';
    } else {
        r4.style.border = '3px solid red';
    }
}

function xshow_data_pro() {
    let xdatax = ''
    for (let i = 0; i < xdata_pro.length; i++) {
        xdatax += `

<tr>
<td>${+[i]+1}</td>
<td>${xdata_pro[i].r1}</td>
<td>${xdata_pro[i].r2}</td>
<td>${xdata_pro[i].r3}</td>
<td>${xdata_pro[i].r4}</td>

<td><button class="xmoro" class="informion" onclick="informion(${i})" type="submit">تفاصيل</button>

<td><button class="xupdat" onclick="xupdat(${i})" type="submit">تعديل</button>
</td>
<td><button class="xdelete" onclick="xdelete_one(${i})" type="submit">حذف</button>
</td>
</tr>
`
        tbody2.innerHTML = xdatax;
    }
}

function xdelete_one(i) {
    xdata_pro.splice(i, 1)
    localStorage.customers = JSON.stringify(xdata_pro)
    xshow_data_pro()
}





function xupdat(i) {

    r1.value = xdata_pro[i].r1
    r2.value = xdata_pro[i].r2
    r3.value = xdata_pro[i].r3
    r4.value = xdata_pro[i].r4
    r5.value = xdata_pro[i].r5
    vx = i
    rptn.innerHTML = 'تعديل'
    customers.style.display = 'none';
    add_customers.style.display = 'block';
    xoperation = 'updat'


    if (r1.value != '') {
        r1.style.border = '3px solid green';
    } else {
        r1.style.border = '3px solid red';
    }
    if (r2.value != '') {
        r2.style.border = '3px solid green';
    } else {
        r2.style.border = '3px solid red';
    }
    if (r3.value != '') {
        r3.style.border = '3px solid green';
    } else {
        r3.style.border = '3px solid red';
    }
    if (r4.value != '') {
        r4.style.border = '3px solid green';
    } else {
        r4.style.border = '3px solid red';
    }
}


function xsearchmod(value) {

    if (value == 'name') {

        xsearch_mod = 'name'
        search_customer.placeholder = 'بحث عن عميل بالاسم';
    } else {
        xsearch_mod = 'addres'
        search_customer.placeholder = 'بحث عن عميل بالعنوان';
    }
    search_customer.value = ''
    deleteall.style.display = 'none'
    xshow_data_pro()

    search_customer.focus()

}




function search_customers(value) {
    let xdatax = '';
    for (let i = 0; i < xdata_pro.length; i++) {
        if (xsearch_mod == 'name') {
            if (xdata_pro[i].r2.includes(value.toLowerCase())) {
                xdatax += `
        <tr>
        <td>${+[i]+1}</td>
        <td>${xdata_pro[i].r1}</td>
        <td>${xdata_pro[i].r2}</td>
        <td>${xdata_pro[i].r3}</td>
        <td>${xdata_pro[i].r4}</td>
        <td><button class="xmoro" onclick="xmoro(${i})" type="submit">تفاصيل</button>
        <td><button class="xupdat" onclick="xupdat(${i})" type="submit">تعديل</button>
        </td>
        <td><button class="xdelete" onclick="xdelete_one(${i})" type="submit">حذف</button>
        </td>
        </tr>
        `
            }
        }
        if (xsearch_mod == 'addres') {
            if (xdata_pro[i].r4.includes(value.toLowerCase())) {
                xdatax += `

        <tr>
        <td>${+[i]+1}</td>
        <td>${xdata_pro[i].r1}</td>
        <td>${xdata_pro[i].r2}</td>
        <td>${xdata_pro[i].r3}</td>
        <td>${xdata_pro[i].r4}</td>
        <td><button class="xmoro" onclick="xmoro(${i})" type="submit">تفاصيل</button>
        <td><button class="xupdat" onclick="xupdat(${i})" type="submit">تعديل</button>
        </td>
        <td><button class="xdelete" onclick="xdelete_one(${i})" type="submit">حذف</button>
        </td>
        </tr>
        `
            }
        }
        deleteall.style.display = 'none'

        tbody2.innerHTML = xdatax;

    }
}

if (localStorage.customers != null) {
    xdata_pro = JSON.parse(localStorage.customers)
} else {
    xdata_pro = []
}
let data_cust = [];
let namecust;
for (let i = 0; i < xdata_pro.length; i++) {
    namecust = xdata_pro[i].r2
    data_cust.push(namecust)
}
console.log(data_cust)

function dsearch(value) {
    autocom.style.display = 'block'
    autocom.innerHTML = ''

    for (let i = 0; i < data_cust.length; i++) {
        if (value != '') {
            if (data_cust[i].includes(value.toLowerCase())) {
                let akm = data_cust[i]
                dad = document.createElement("li");
                dad.onclick = function() {
                    name_client.value = akm
                    checkz()
                    autocom.style.display = 'none'
                }
                dad1 = document.createTextNode(akm);
                dad.appendChild(dad1);
                autocom.appendChild(dad);
            }
        } else {
            let akm = data_cust[i]
            dad = document.createElement("li");
            dad.onclick = function() {
                name_client.value = akm
                checkz()
                autocom.style.display = 'none'
            }
            dad1 = document.createTextNode(akm);
            dad.appendChild(dad1);
            autocom.appendChild(dad);
        }
    }
}
let f;
let m;

function rdsearch() {
    xautocom.innerHTML = ''
    xautocom.style.display = 'block'

    for (let i = 0; i < data_cust.length; i++) {
        let akm = data_cust[i]
        dad = document.createElement("li");
        dad.onclick = function() {
            k1.value = akm
            checkz()
            m = i
            console.log(m)
            k5.style.display = 'block'
            k6.style.display = 'block'
            k7.style.display = 'block'
            xautocom.style.display = 'none'
        }
        dad1 = document.createTextNode(akm);
        dad.appendChild(dad1);
        xautocom.appendChild(dad);


    }
}
rdsearch()

function xdsearch(value) {
    xautocom.innerHTML = ''
    xautocom.style.display = 'block'
    if (value != '') {
        for (let i = 0; i < data_cust.length; i++) {
            if (data_cust[i].includes(value.toLowerCase())) {
                let akm = data_cust[i]
                dad = document.createElement("li");
                dad.onclick = function() {
                    k1.value = akm
                    checkz()
                    m = i
                    k5.style.display = 'block'
                    k6.style.display = 'block'
                    k7.style.display = 'block'
                    xautocom.style.display = 'none'
                }
                dad1 = document.createTextNode(akm);
                dad.appendChild(dad1);
                xautocom.appendChild(dad);
            }
        }
    }
}



function xrchek() {

    if (k1.value != '') {
        k1.style.border = '3px solid green';
    } else {
        k1.style.border = '3px solid red';
    }
    if (k2.value != '') {
        k2.style.border = '3px solid green';
    } else {
        k2.style.border = '3px solid red';
    }
    if (k3.value != '') {
        k3.style.border = '3px solid green';
    } else {
        k3.style.border = '3px solid red';
    }
}



name_client.onclick = function() {
    autocom.style.display = 'block'
}
let r;
let xd;
let xds = []

function alll() {
    k7.value = k5.value * k6.value
}

function ksave() {
    let dv;
    let rv = []
    alll()
    for (let i = 0; i < xds.length; i++) {
        dv = xds[i].k4
        rv.push(dv)
    }



    dx = {
        k4: k4.value,
        k5: k5.value,
        k6: k6.value,
        k7: k7.value,
    }

    if (k4.value != '' && k5.value != '' && k6.value != '' && k6.value <= data_pro[ccc].number) {
        if (namesproduct.includes(k4.value.toLowerCase())) {
            if (rv.includes(k4.value.toLowerCase())) {
                alert('لقد تم اضافة هذا العنصر الى الفاتوره بالفعل')

            } else {
                xds.push(dx)
                data_pro[ccc].number = data_pro[ccc].number - k6.value
                qws()
            }
        } else {
            alert('هذا المنتج غير موجود')
        }
        alll()
    } else {
        alert('تأكد من صحة البيانات المدخله او الخانات المتروكه')
    }
    xcheks()
    zshow_data_pro()
}

function frg(i) {
    xds.splice(i, 1)
    zshow_data_pro()
    sfd()
}



function sfd() {
    dis = (discont.value / 100) * rd
    disvalue.innerHTML = dis.toFixed(2)
    alvalue.innerHTML = (rd - dis).toFixed(2)
}

function zshow_data_pro() {
    let xdatax = ''
    rd = 0;
    dis = 0
    for (let i = 0; i < xds.length; i++) {
        rd += +xds[i].k7
        dis = (discont.value / 100) * rd
        disvalue.innerHTML = dis.toFixed(2)
        alvalue.innerHTML = (rd - dis).toFixed(2)
        xdatax += `
<tr>
<td>${+[i]+1}</td>
<td>${xds[i].k4}</td>
<td>${xds[i].k5}</td>
<td>${xds[i].k6}</td>
<td>${xds[i].k7}</td>
<td><button class="xdelete" onclick="frg(${i})" type="submit">حذف</button>
</td>
</tr>
`
    }
    ktbody.innerHTML = xdatax;

}

function qws() {
    k5.value = ''
    k6.value = ''
    k4.value = ''
}
let zallz = [];
let xall;
if (localStorage.allz != null) {

    xall = JSON.parse(localStorage.allz)
} else {
    xall = []
}

let refrish = document.querySelector('.refrish')

function zsave() {

    let rh = {
        k1: k1.value,
        k2: k2.value,
        k3: k3.value,
        m: m,
        discont: discont.value,
        disvalue: disvalue.innerHTML,
        alvalue: alvalue.innerHTML
    }

    if (k1.value != '' && k2.value != '' && k3.value != '') {
        if (data_cust.includes(k1.value.toLowerCase())) {
            if (xds.length > 0) {
                zallz.push(rh)
                zallz.push(xds)
                xall.push(zallz)
                localStorage.setItem('product', JSON.stringify(data_pro))
                localStorage.setItem('allz', JSON.stringify(xall))
                newinvoice.style.display = 'none'
                print1.style.display = 'block'
                abr()
            } else {
                alert("الفاتوره فارغه")
            }
        } else {
            alert('هذا العميل غير مسجل')
        }
    } else {
        alert('تأكد من اسم صاحب الفاتورة والتاريخ والوقت')


    }

    function abr() {
        j1.innerHTML = z1
        j2.innerHTML = z2
        j6.innerHTML = z3
        j3.innerHTML = zallz[0].k1
        j4.innerHTML = xdata_pro[m].r3
        discont1.value = zallz[0].discont
        disvalue1.innerHTML = zallz[0].disvalue
        alvalue1.innerHTML = zallz[0].alvalue
        j5.innerHTML = zallz[0].k2 + '  ' + zallz[0].k3
        h2.style.display = 'none'
        wrapper.style.display = 'none'
        refrish.style.display = 'none'
        newinvoice.style.display = 'none'
        print1.style.display = 'block'
        let xdatax = ''
        for (let i = 0; i < xds.length; i++) {
            xdatax += `
<tr>
<td>${+[i]+1}</td>
<td>${xds[i].k4}</td>
<td>${xds[i].k5}</td>
<td>${xds[i].k6}</td>
<td>${xds[i].k7}</td>
</tr>
`
        }
        ktbody1.innerHTML = xdatax;
        window.print()
        window.location.reload()
    }
}
if (localStorage.location2 == null) {
    localStorage.location2 = "home"
}
let location2 = localStorage.location2


function rh() {
    let xdatax = ''
    for (let i = 0; i < xall.length; i++) {

        xdatax += `
<tr>
<td>${+[i]+1}</td>
<td>${xall[i][0].k3}</td>
<td>${xall[i][0].k1}</td>
<td>${xall[i][0].alvalue}</td>
<td><button class="xmoro" onclick="xmoro(${i})" type="submit">تفاصيل</button>
</td>
<td><button class="xdelete" onclick="fr(${i})" type="submit">حذف</button>
</td>
</tr>
`

    }

    ttbody.innerHTML = xdatax

}

function rv(value) {
    let xdatax = ''
    for (let i = 0; i < xall.length; i++) {
        if (xall[i][0].k1.includes(value.toLowerCase())) {
            xdatax += `
<tr>
<td>${+[i]+1}</td>
<td>${xall[i][0].k3}</td>
<td>${xall[i][0].k1}</td>
<td>${xall[i][0].alvalue}</td>
<td><button class="xmoro" onclick="zmoro(${i})" type="submit">تفاصيل</button>
</td>
<td><button class="xdelete" onclick="fr(${i})" type="submit">حذف</button>
</td>
</tr>
`

        }
    }
    ttbody.innerHTML = xdatax

}

function fr(i) {
    xall.splice(i, 1)
    localStorage.allz = JSON.stringify(xall)
    rh()
}
//////////////////////////////////////////////////////////////////////////////
function xmoro(v) {
    j1.innerHTML = z1
    j2.innerHTML = z2
    j6.innerHTML = z3
    j3.innerHTML = xall[v][0].k1
    j4.innerHTML = xdata_pro[xall[v][0].m].r3
    discont1.value = xall[v][0].discont
    disvalue1.innerHTML = xall[v][0].disvalue
    alvalue1.innerHTML = xall[v][0].alvalue
    j5.innerHTML = xall[v][0].k2 + '  ' + xall[v][0].k3
    h2.style.display = 'none'
    wrapper.style.display = 'none'
    refrish.style.display = 'none'
    list_invoice.style.display = 'none'
    print1.style.display = 'block'
    let xdatax = ''
    for (let i = 0; i < xall[v][1].length; i++) {
        xdatax += `
<tr>
<td>${+[i]+1}</td>
<td>${xall[v][1][i].k4}</td>
<td>${xall[v][1][i].k5}</td>
<td>${xall[v][1][i].k6}</td>
<td>${xall[v][1][i].k7}</td>
</tr>
`
    }
    ktbody1.innerHTML = xdatax;

}
let crf = document.querySelector('.crv')
print1.ondblclick = function() {
        window.print()
        window.location.reload()
    }
    //////////////////////////////////////////////////////////////    
function informion(id) {
    all_product.style.display = 'none';
    all.style.display = 'none';
    client.style.display = 'none'
    client_data.style.display = 'none';
    data.style.display = 'none';
    add_customers.style.display = 'none';
    customers.style.display = 'none';
    ptn_invoices.style.display = 'none';
    new_invoice.style.display = 'none';
    list_invoice.style.display = 'none';
    ptn_customer.style.display = 'none';
    allInformionClinet.style.display = 'block';


}

//////////////////////////////////////////////////////////////    
login.style.display = 'none';

function ahmed() {

    if (pass.value != passw && name.value != user) {
        alert('username and password are is correct')
    } else if (pass.value != passw) {
        pass.style.border = '3px solid red';
        alert('Password is in correct')
    } else if (name.value != user) {
        name.style.border = '3px solid red';
        alert('Username is in correct')
    }
    if (name.value == user && pass.value == passw) {
        alert('Login succeed')

        login.style.display = 'none';

        if (location2 == 'home') {
            all_product.style.display = 'none';
            all.style.display = 'none';
            client.style.display = 'none'
            client_data.style.display = 'none';
            data.style.display = 'none';
            add_customers.style.display = 'none';
            customers.style.display = 'none';
            ptn_invoices.style.display = 'none';
            new_invoice.style.display = 'none';
            list_invoice.style.display = 'none';
            ptn_customer.style.display = 'none';
        } else if (location2 == 'all') {
            enter()
        } else if (location2 == 'all_product') {
            show()
        } else if (location2 == 'client') {
            hide()
        } else if (location2 == 'client_data') {
            oldx()
        } else if (location2 == 'userpass') {
            chang()
        } else if (location2 == 'add_customers') {
            m2()
        } else if (location2 == 'customers') {
            m3()
        } else if (location2 == 'ptn_customer') {
            m1()
        } else if (location2 == 'ptn_invoices') {
            p1()
        } else if (location2 == 'new_invoice') {
            p2()
        } else if (location2 == 'list_invoice') {
            p3()
        } else if (location2 == 'rar') {
            rer()
        }
        wrapper.style.display = 'block';

    } else {
        console.log('Date is Error')
    }
}
//////////////////////////////////////////////////////////////    

wrapper.style.display = 'block';

if (location2 == 'home') {
    all_product.style.display = 'none';
    all.style.display = 'none';
    client.style.display = 'none'
    client_data.style.display = 'none';
    data.style.display = 'none';
    add_customers.style.display = 'none';
    customers.style.display = 'none';
    ptn_invoices.style.display = 'none';
    new_invoice.style.display = 'none';
    list_invoice.style.display = 'none';
    ptn_customer.style.display = 'none';
} else if (location2 == 'all') {
    enter()
} else if (location2 == 'all_product') {
    show()
} else if (location2 == 'client') {
    hide()
} else if (location2 == 'client_data') {
    oldx()
} else if (location2 == 'userpass') {
    chang()
} else if (location2 == 'add_customers') {
    m2()
} else if (location2 == 'customers') {
    m3()
} else if (location2 == 'ptn_customer') {
    m1()
} else if (location2 == 'ptn_invoices') {
    p1()
} else if (location2 == 'new_invoice') {
    p2()
} else if (location2 == 'list_invoice') {
    p3()
} else if (location2 == 'rar') {
    rer()
}
