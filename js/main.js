// All post item selected now 
const allPostItem = async() => {
    const resp = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data = await resp.json();
    const result = data.posts;
  
    const postContainer = document.getElementById('postContainer');
    // Using ForEach Loop for get Each Single element



    result.forEach((item) => {

        const title = item.title;
        const viewCount = item.view_count;
        

        const div = document.createElement('div');
        div.classList.add('my-2');
        div.innerHTML = 
        `
            <div class="bg-[#797DFC1A] flex gap-5 p-5 rounded-md">
            <div>
                <div class="indicator translate-x-7 translate-y-4">
                    <span id="indicator" class="indicator-item badge bg-red-500 "></span> 
                </div>
                <img class="w-16 mt-[15px] rounded-lg" src="${item.image}" alt="mass">
            </div>
            <div class="text-left text-[#12132DCC] w-full">
                <p class="text-[#12132DCC] text-xs font-inter pt-3"># <span class="mr-2">${item.category}</span> Author : <span>${item.author.name}</span></p>
                <h5 id="postTitle" class="text-[#12132D] text-xl font-semibold py-3">${item.title}</h5>
                <p class="text-[#12132D99] font-inter text-sm pb-5">${item.description}</p>
                <div class="border-t-[1px] border-dashed border-gray-500 flex justify-between items-center gap-5 py-5">
                        <div class="flex items-center gap-4">
                            <div class="flex gap-2">
                                <img src="./images/mass.svg" alt="massage">
                                <span>${item.comment_count}</span> 
                            </div>
                            <div id="viewCounted" class="flex gap-2">
                                <img src="./images/eye.svg" alt="eye">
                                <span>${item.view_count}</span> 
                            </div>
                            <div class="flex gap-2">
                                <img src="./images/watch.svg" alt="watch">
                                <span>${item.posted_time}</span>min 
                            </div> 
                        </div>
                        <div>
                            <button onclick="getTheTextBtn('${title}', '${viewCount}')" class="bg-green-500 text-white w-8 h-8 rounded-full">
                            <i class="fa-solid fa-envelope"></i>
                            </button>
                        </div>
                </div>
            </div>
         </div>

        `
        postContainer.appendChild(div);
        


        // Active Status
        const indicator = document.getElementById('indicator');
        if(item.isActive === true){
            indicator.style.backgroundColor = 'green';
        }else{
            indicator.style.backgroundColor = 'red';
        }
    })

    
}




// Latest Posts 
const letestPost = async () =>{
    const resp = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
    const data = await resp.json();
    const result = data;

    const letestBlog = document.getElementById('blogContainer');
    result.forEach((item)=>{
        
       const div = document.createElement('div');
       div.classList.add('flex' , 'mx-auto');
       div.innerHTML = `  
       <div class="card w-96 bg-base-100 shadow-xl">                         
       <figure class="px-10 pt-10">
       <img src="${item.cover_image}" alt="Shoes" class="rounded-xl" />
     </figure>
     <div class="card-body ">
         <p class="flex gap-2 items-center">
             <img src="./images/calender.svg" alt="calender"> 
             <span class="text-sm text-[#12132D99]">${item.author.posted_date}</span>
         </p>
         <h2 class="text-left text-[#12132D] text-lg font-semibold">${item.title}</h2>
         <p class="text-left text-base text-[#12132D99]">${item.description}</p>
         <div class="flex items-center my-5 text-left gap-3">
             <img class="w-10 h-10 rounded-full" src="${item.profile_image}">
             <div>
                 <h5 class="text-[#12132D] text-base font-semibold">${item.author.name}</h5>
                 <h5 class="text-sm text-[#12132D99]">${item.author.designation}</h5>
             </div>
         </div>
     </div>
     </div>
     `


     letestBlog.appendChild(div)
    })
}



// Shift The Title And Count Right Side

let num = 0;
const getTheTextBtn = (title, count) =>{

    const markCount = document.getElementById('markReadCount');
    markCount.innerText = num += 1;

    const showRightSide = document.getElementById('titleShowContainer');


    const div = document.createElement('div');
    div.classList.add('flex', 'justify-between', 'items-center', 'my-3', 'bg-white', 'p-3', 'rounded-lg')


    const titleDiv = document.createElement('div');
    const h3 = document.createElement('h3');
    h3.classList.add('text-left', 'font-semibold');
    h3.innerHTML = title;

    const countDiv = document.createElement('div');
    countDiv.classList.add('flex', 'gap-2');
    countDiv.innerHTML = `<img src="./images/eye.svg" alt="eye">
                          <span>${count}</span>`


    titleDiv.appendChild(h3)

    div.appendChild(titleDiv);
    div.appendChild(countDiv);
    showRightSide.appendChild(div)

}





// Search The Categori
const findCategori = async (inputText) =>{
    const resp = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${inputText}`);
    const data = await resp.json();
    const result = data;

}



// Categori Search 
const searchTheCat = () => {
    
    const searchFields = document.getElementById('searchField');
    const inputText = searchFields.value;
    console.log(inputText);

    findCategori(inputText);
}











letestPost()
allPostItem()