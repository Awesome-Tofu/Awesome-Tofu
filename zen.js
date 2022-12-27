
        const api_url = 'https://raw.githubusercontent.com/Awesome-Tofu/wa-botAPIs/main/Just%20a%20json/zenitsu.json'
        async function getIMG() {
            const response = await fetch(api_url);
            const data = await response.json();
            let random = data[Math.floor(Math.random() * data.length)];
            console.log(random.zen);
        }
        // const data = await response.json();
        // console.log(data);
        // }
        getIMG();
