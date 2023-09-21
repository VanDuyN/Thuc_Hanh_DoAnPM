const head = document.querySelector('.contact');
fetch('/header.html')
.then(res => res.text())
.then(data=>{
    head.innerHTML = data;
    // Thực hiện hiển thị lại nội dung của phần tử HTML có lớp là contact
    const contact = document.querySelector('.contact');
    contact.style.display = 'block';
})
.catch(err => console.log(err));

// <iframe src="./header.html" frameborder="0" width="100%" height="230px"></iframe>
