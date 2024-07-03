
<script>
    

    function share() {
        alert('Sharing poll...');
    }

    let modalActive = false;

    function modalfun() {
        modalActive = true;
    }

    function closeModal() {
        modalActive = false;
    }

    const votes = [
        { option: 'Option 1', count: 1 },
        { option: 'Option 2', count: 2 },
        { option: 'Option 3', count: 2 }
    ];

    // Calculate total votes
    let totalVotes = votes.reduce((total, vote) => total + vote.count, 0);

    // Calculate percentage for each option
    const getPercentage = (count) => (totalVotes ? (count / totalVotes) * 100 : 0);
</script>

<style>

svg path {
        fill: #fff; 
    }
    /* CSS styles here */
    .outer-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .inner-container {
        width: 70%;
        border: 1px solid rgb(31, 41, 55);
        border-radius: 6px;
        background-color: rgb(31, 41, 55);
        padding: 24px;
        color: rgb(209, 213, 219);
        border-top-style: solid;
        border-top-width: 4px;
        border-top-color: rgb(56, 124, 228);
    }
    .title  {
        padding: 14px 16px;
    }
    .title h2 {
        color: #fff;
        font-size: 30px;
        font-weight: 300;
    }
    .title p {
        color: #fff;
        font-size: 15px;
        font-weight: 10px;
    }
    .results {
        padding: 14px 16px;
        color: #fff;
        font-size: 15px;
        font-weight: 10px;    
    }
    .bar {
        display: block;
    }
    .options {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    .info {
        display: flex;
        justify-content: space-between;
        color: #fff;
        font-size: 15px;
        font-weight: 10px;
    }
    .bar .line {
        margin-bottom: 15px;
        position: relative;
        width: 80%;
        height: 20px;
        background: #fff;
        border-radius: 10px;
    }
        .bar .line > div {
        height: 100%;
        background: pink;
        border-radius: 10px;
    }


    .button {
        display: flex;
        gap: 250px;
    }
    .btn {
        display: flex;
        justify-content: left;
        align-items: center;
        gap: 20px;
    }
    .live-result-btn {
        width: 120px;
        text-align: center;
        border-radius: 6px;
        color: white;
        padding: 8px;
        background-color: rgb(56, 124, 228);
        margin-top: 24px;
        font-size: 14px;
        font-weight: 500;
    }
    .btn2 {
        display: flex;
        justify-content: space-evenly;
    }

    .btn2 svg{
        color: #fff;
        width: 20px;
        height: 20px;
    }

    .modal {
        z-index: 999999;
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
        display: flex;
        justify-content: center;
        align-items: center;
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    .modal.active {
        visibility: visible;
        opacity: 1;
    }
    .modal-inner {
        width: 80%;
        max-width: 600px; /* Limit maximum width */
        border: 1px solid rgb(31, 41, 55);
        border-radius: 6px;
        background-color: rgb(31, 41, 55);
        padding: 24px;
        color: rgb(209, 213, 219);
        border-top-style: solid;
        border-top-width: 4px;
        border-top-color: rgb(56, 124, 228);
    }

	.button-container{
		display: flex;
		justify-content: space-between;
		gap: 8px;
	}

	.live-btn {
        display: flex;
        flex-direction: column;
        justify-self: center;
        align-items: center;
        gap: 2px;
        width: auto;
        text-align: center;
        border-radius: 6px;
        color: white;
        padding: 8px;
        background-color: rgb(56, 124, 228);
        margin-top: 24px;
        font-size: 14px;
        font-weight: 500;
    }

    .share{
        width: 40px;
        height: 40px;
        color: #fff;
    }

    @media(max-width: 1250px) {
		.inner-container{
			width: 80%;
		}
        .button {
            display: flex;
            gap: 100px;
        }
		.bar .line{
			width: 90%;
		}
    }

    @media(max-width: 900px) {
		.inner-container{
			width: 90%;
		}
        .button {
            display: block;
            gap: 20px;
        }
        .live-result-btn {
            width: 100px;
        }
		.bar .line{
			width: 95%;
		}
    }
</style>

<div class="outer-container">
    <div class="inner-container">

        <div class="title">
            <h2>Title</h2>
         
        </div>

        <div class="results">
        
             <ul class="bar">
                {#each votes as { option, count }}
                    <li class="options">
                        <div class="info">
                            <h1>{option}</h1>
                            <h1>{getPercentage(count).toFixed(1)}% ({count} votes)</h1>
                        </div>
                        <div class="line">
                            <div style="width: {getPercentage(count)}%;"></div>
                        </div>
                    </li>
                {/each}
            </ul>
        </div>

		<div class="title">
           
           <p>Total votes: {totalVotes}</p> 
        </div>

        <div class="button">
            <div class="btn">
                <button class="btn2 live-result-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm64 192c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm64-64c0-17.7 14.3-32 32-32s32 14.3 32 32V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V160zM320 288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32z"/></svg>
                    Live Results</button>
                <button class="btn2 live-result-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                    Back to Poll</button>
            </div>
            <div class="btn2 live-result-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"/></svg>
                <!-- //remove<button class="" on:click={modalfun}>Share</button> -->

                <button class="" on:click={modalfun}>Share</button>
            </div>
        </div>

        <!-- Modal  -->
        <div class="modal {modalActive ? 'active' : ''}" >
            <div class="modal-inner">
                <h2>Share this poll</h2>
                <div class="button-container">
                    <button class="share-button live-btn" on:click={share}>
                        <svg class="share" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
                        Share on Facebook</button>
                    <button class="share-button live-btn" on:click={share}>
                        <svg class="share" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/></svg>
                        Share on Twitter</button>
                    <button class="share-button live-btn" on:click={share}>
                        <svg class="share" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                        Share via Email</button>
                </div>
                <button class="live-result-btn" on:click={closeModal}>Close</button>
            </div>
        </div>

    </div>
</div>


