const emojis = [
    { decimal: 128512, hexadecimal: '1F600' },
    { decimal: 128514, hexadecimal: '1F602' },
    { decimal: 128522, hexadecimal: '1F60A' },
    { decimal: 128526, hexadecimal: '1F60E' },
    { decimal: 128525, hexadecimal: '1F60D' },
    { decimal: 129395, hexadecimal: '1F973' },
    { decimal: 127881, hexadecimal: '1F389' },
    { decimal: 127775, hexadecimal: '1F31F' },
    { decimal: 128077, hexadecimal: '1F44D' },
    { decimal: 10084, hexadecimal: '2764' },
    { decimal: 128521, hexadecimal: '1F619' },
    { decimal: 128529, hexadecimal: '1F611' },
    { decimal: 128536, hexadecimal: '1F618' },
    { decimal: 128547, hexadecimal: '1F623' },
    { decimal: 128522, hexadecimal: '1F60A' },
    { decimal: 128536, hexadecimal: '1F618' },
    { decimal: 128520, hexadecimal: '1F618' },
    { decimal: 128588, hexadecimal: '1F63C' },
    { decimal: 128577, hexadecimal: '1F631' },
    { decimal: 128578, hexadecimal: '1F632' },
    { decimal: 128552, hexadecimal: '1F628' },
    { decimal: 128551, hexadecimal: '1F627' },
    { decimal: 128549, hexadecimal: '1F625' },
    { decimal: 128540, hexadecimal: '1F61C' },
    { decimal: 128526, hexadecimal: '1F60E' },
    { decimal: 128539, hexadecimal: '1F61B' },
    { decimal: 128557, hexadecimal: '1F633' },
    { decimal: 128558, hexadecimal: '1F634' },
    { decimal: 128559, hexadecimal: '1F635' },
    { decimal: 128552, hexadecimal: '1F628' },
    { decimal: 128553, hexadecimal: '1F629' },
    { decimal: 128554, hexadecimal: '1F62A' },
    { decimal: 128555, hexadecimal: '1F62B' },
    { decimal: 128556, hexadecimal: '1F62C' },
    { decimal: 128541, hexadecimal: '1F61D' },
    { decimal: 128534, hexadecimal: '1F616' },
    { decimal: 128563, hexadecimal: '1F643' },
    { decimal: 128558, hexadecimal: '1F634' },
    { decimal: 128556, hexadecimal: '1F62C' },
    { decimal: 128554, hexadecimal: '1F62A' },
    { decimal: 128551, hexadecimal: '1F627' },
    { decimal: 128551, hexadecimal: '1F627' },
    { decimal: 128542, hexadecimal: '1F61E' },
    { decimal: 128564, hexadecimal: '1F644' },
    { decimal: 128527, hexadecimal: '1F60F' },
    { decimal: 128533, hexadecimal: '1F615' },
    { decimal: 128523, hexadecimal: '1F60B' },
    { decimal: 128528, hexadecimal: '1F610' },
    { decimal: 128530, hexadecimal: '1F612' },
    { decimal: 128531, hexadecimal: '1F613' },
    { decimal: 128532, hexadecimal: '1F614' },
    { decimal: 128535, hexadecimal: '1F617' },
    { decimal: 128537, hexadecimal: '1F619' },
    { decimal: 128538, hexadecimal: '1F61A' },
    { decimal: 128540, hexadecimal: '1F61C' },
    { decimal: 128543, hexadecimal: '1F61F' },
    { decimal: 128544, hexadecimal: '1F620' },
    { decimal: 128545, hexadecimal: '1F621' },
    { decimal: 128546, hexadecimal: '1F622' },
    { decimal: 128548, hexadecimal: '1F624' },
    { decimal: 128550, hexadecimal: '1F626' },
    { decimal: 128553, hexadecimal: '1F629' },
    { decimal: 128555, hexadecimal: '1F62B' },
    { decimal: 128557, hexadecimal: '1F62D' },
    { decimal: 128560, hexadecimal: '1F636' },
    { decimal: 128562, hexadecimal: '1F638' },
    
];

function generateEmojiGallery() {
    const galleryContainer = document.getElementById("galleryContainer");

    emojis.forEach(emoji => {
        const emojiItem = document.createElement("div");
        emojiItem.classList.add("emoji-item");
        emojiItem.textContent = String.fromCodePoint(emoji.decimal);
        
        const tooltip = document.createElement("span");
        tooltip.classList.add("emoji-tooltip");
        tooltip.textContent = `Decimal: ${emoji.decimal}, Hexadecimal: U+${emoji.hexadecimal}`;
        
        emojiItem.appendChild(tooltip);
        galleryContainer.appendChild(emojiItem);
    });
}

window.onload = function() {
    generateEmojiGallery();
};
