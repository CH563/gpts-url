const readerList = (lists: any[], searchVal?: string) => {
    const elArr = [];
    if (searchVal) {
        const div = document.createElement('div');
        div.className = 'text-2xl font-bold md:col-span-3 sm:col-span-2 mb-2';
        div.innerText = `Search "${searchVal}" Results`;
        elArr.push(div);
    }
    for (const item of lists) {
        const aEl = document.createElement('a');
        aEl.className = 'flex gap-3 bg-white rounded-2xl p-5 items-start cursor-pointer select-none overflow-hidden group hover:shadow-lg dark:bg-black/50';
        aEl.href = `/gpts-store/${item.search_key}`;
        aEl.innerHTML = `
            ${item.icon ? `<img loading="lazy" decoding="async" class="flex w-12 h-12 md:w-20 md:h-20 rounded-full flex-shrink-0 bg-gray-100 overflow-hidden dark:bg-gray-800" src=${item.icon} alt=${item.title} onerror="this.src='/none.png'">` :
                `<div class="flex w-12 h-12 md:w-20 md:h-20 items-center justify-center rounded-full flex-shrink-0 bg-gray-100 overflow-hidden dark:bg-gray-800">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-token-secondary h-2/3 w-2/3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                </div>`
            }
            <div class="w-0 flex-1">
                <h3 class="font-medium truncate text-gray-900 dark:text-gray-50 text-sm md:text-lg  transition group-hover:text-[#0b7b94] dark:group-hover:text-[#6cc3d7]">
                    ${item.title}
                </h3>
                ${item.author && `<p class="opacity-70 truncate text-xs md:text-sm mt-1">by <span class="text-black underline dark:text-white">${item.author}<span></p>`}
                <p class="text-gray-600 mt-1 text-xs md:text-sm dark:text-gray-400">
                    ${item.description}
                </p>
            </div>
        `;
        elArr.push(aEl);
        
    }
    return elArr;
}

export default readerList;