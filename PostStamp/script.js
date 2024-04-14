 // Sample data (titles and corresponding information)
 const titles = [
    { title: "1", info: "RHiophora mucronata  stamp you're referring to appears to be a stamp issued by India Post featuring the succulent plant Huernia mucronata. However, there seems to be a typo in the name. The correct scientific name for the plant is Huernia mucronata not Hiophora mucronata Huernia mucronata is a species of flowering plant in the Apocynaceae family, native to Southern Africa. It is commonly known as carrion plant due to the foul odor its flowers emit, which attracts flies for pollination.  India Post often issues stamps featuring various aspects of India s flora and fauna, including native and exotic plants. If you are interested in acquiring this stamp or learning more about it, you may want to check with philatelic collectors or visit the India Post website for information on their stamp releases. about Title 1" },
            { title: "2", info: " India Post had have issued a stamp commemorating the importance of biogas as a renewable energy source in the country. Biogas is produced through the anaerobic digestion of organic matter such as agricultural waste, animal dung, and sewage. In India, biogas has been utilized as a sustainable energy source for cooking, lighting, and even power generation in rural areas." },
            { title: "3", info: "The India 500 Buddha stamp issued in 2007 is part of a series commemorating the life and teachings of Gautama Buddha, the founder of Buddhism. These stamps are significant as they honor one of the most influential spiritual leaders in history. Gautama Buddha, also known as Siddhartha Gautama, lived in ancient India and founded Buddhism around the 6th century BCE. His teachings emphasized the Four Noble Truths and the Eightfold Path, which serve as guiding principles for followers of Buddhism worldwide. The 500 Buddha stamp likely features an image of Gautama Buddha or a symbolic representation related to Buddhism, such as the Bodhi tree under which he attained enlightenment or Buddhist stupas. These stamps not only celebrate the cultural and spiritual heritage of India but also serve as a reminder of the profound impact of Buddhism on global culture and philosophy." },
            { title: "4", info: "The India 500 stamp issued in 2009 commemorates the bicentennial birth anniversary of Louis Braille, the inventor of the Braille system. Louis Braille was born on January 4, 1809, in Coupvray, France. He became blind at a young age due to an accident and later developed a system of raised dots that enabled blind individuals to read and write independently. The Braille system, which consists of raised dots arranged in cells, allows visually impaired individuals to read through touch. It has revolutionized accessibility for blind people around the world, enabling them to access literature, education, and information independently. " }
        ];

// Function to display search results
function displaySearchResults(results) {
    const resultList = document.getElementById('searchResults');
    resultList.innerHTML = '';

    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result.title;
        li.addEventListener('click', () => {
            alert(result.info); // You can customize how to display the info here
        });
        resultList.appendChild(li);
    });
}

// Function to handle search
function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const results = titles.filter(title => title.title.toLowerCase().includes(searchTerm));
    displaySearchResults(results);
}

// Event listener for search input
document.getElementById('searchInput').addEventListener('input', handleSearch);
