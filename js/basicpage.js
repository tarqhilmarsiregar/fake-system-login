function createBasicPage() {
    document.getElementById('root').innerHTML = `
        <nav class="navbar navbar-dark bg-primary">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1">Basic Page</span>
            </div>
        </nav>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9naWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="d-block w-100" alt="">
            </div>
            <div class="carousel-item">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHRlY2hub2xvZ2llc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="d-block w-100" alt="">
            </div>
            <div class="carousel-item">
            <img src="https://images.unsplash.com/photo-1506399309177-3b43e99fead2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHRlY2hub2xvZ2llc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="d-block w-100" alt="https://images.unsplash.com/photo-1506399309177-3b43e99fead2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHRlY2hub2xvZ2llc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>        
        <h2 class="text-center mt-3">Tutorial</h2>
        <h3 class="text-center mt-4">Web Development</h3>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card">
                <img src="data:image/png;base64,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" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">HTML Dasar</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OifDfQ1O-Cjgmlu-5SZaEppd3l97j9t9mNGJxb7eTg&s" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">CSS Dasar</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                <img src="data:image/png;base64,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" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">JavaScript Dasar</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
                </div>
            </div>
        </div>        
        <h3 class="text-center mt-5">Linux Debian</h3>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Debian_logo.png?20090620221309" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">Introduction: Linux Debian</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Debian_logo.png?20090620221309" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">Linux Debian Installation</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Debian_logo.png?20090620221309" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">Debian 9: SSH Server</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
                </div>
            </div>
        </div>
        <button type="button" class="btn btn-secondary mt-3" id="logoutButton">Logout</button>                    
    `;
    document.getElementById('logoutButton').addEventListener('click', function(e) {
        let confirmLogout = confirm('Yakin ingin logout ?');
        if(confirmLogout) {
            Logout();
        }
        e.preventDefault();
    });            
}

function showBasicPage() {
    createBasicPage();
}