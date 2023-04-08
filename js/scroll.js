


var link = document.querySelector('#scollToDiscover');


link.addEventListener('click', function (e) {
    e.preventDefault(); 
    var section2 = document.getElementById('scollToDiscoveryTo');
    section2.scrollIntoView({ behavior: 'smooth' }); 
});

// Hóa đơn Nhập scroll
var link = document.querySelector('#manage-input-invoices');

link.addEventListener('click', function (e) {
    e.preventDefault(); 
    var section2 = document.getElementById('Manage-Input-Invoices');
    section2.scrollIntoView({ behavior: 'smooth' }); 
});

// Hóa đơn xuất scroll
var link = document.querySelector('#manage-export-invoices');

link.addEventListener('click', function (e) {
    e.preventDefault(); 
    var section2 = document.getElementById('Manage-Export-Invoices');
    section2.scrollIntoView({ behavior: 'smooth' }); 
});

// Sản phẩm scroll
var link = document.querySelector('#product-management');

link.addEventListener('click', function (e) {
    e.preventDefault(); 
    var section2 = document.getElementById('Product-Management');
    section2.scrollIntoView({ behavior: 'smooth' }); 
});

// Phân loại scroll
var link = document.querySelector('#category-management');

link.addEventListener('click', function (e) {
    e.preventDefault(); 
    var section2 = document.getElementById('Category-Management');
    section2.scrollIntoView({ behavior: 'smooth' }); 
});

// Nhà Cung Cấp scroll
var link = document.querySelector('#supplier-management');

link.addEventListener('click', function (e) {
    e.preventDefault(); 
    var section2 = document.getElementById('Supplier-Management');
    section2.scrollIntoView({ behavior: 'smooth' }); 
});

// Thống kê scroll
var link = document.querySelector('#summary-of-statistics');

link.addEventListener('click', function (e) {
    e.preventDefault(); 
    var section2 = document.getElementById('Summary-Of-Statistics');
    section2.scrollIntoView({ behavior: 'smooth' }); 
});

// Nhân Viên scroll
var link = document.querySelector('#management-employee');

link.addEventListener('click', function (e) {
    e.preventDefault(); 
    var section2 = document.getElementById('Management-Employee');
    section2.scrollIntoView({ behavior: 'smooth' }); 
});


// Tài khoản scroll
var link = document.querySelector('#managetment-user');

link.addEventListener('click', function (e) {
    e.preventDefault(); 
    var section2 = document.getElementById('Managetment-User');
    section2.scrollIntoView({ behavior: 'smooth' }); 
});

// Hóa đơn Nhập scroll
var link = document.querySelector('#manage-import-invoices-frist');

link.addEventListener('click', function (e) {
    e.preventDefault(); 
    var section2 = document.getElementById('Manage-Input-Invoices-Frist');
    section2.scrollIntoView({ behavior: 'smooth' }); 
});

// Hóa đơn xuất scroll
var link = document.querySelector('#manage-export-invoices-frist');

link.addEventListener('click', function (e) {
    e.preventDefault(); 
    var section2 = document.getElementById('Manage-Export-Invoices');
    section2.scrollIntoView({ behavior: 'smooth' }); 
});

// Cuộn lên đầu trang
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }