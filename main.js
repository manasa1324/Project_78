var images = 
[
"https://i.postimg.cc/MKdhy06Z/family.jpg", 
"https://d18l82el6cdm1i.cloudfront.net/solvable/a77d770bff.39dd3478e9.bvbQXl.png", 
"https://i.postimg.cc/wjMnFtMX/father.jpg", 
"https://i.postimg.cc/5ymDKL83/bro.jpg", 
"https://i.postimg.cc/JnL6wtrd/sister.jpg", 
"https://i.postimg.cc/bw5W5zSK/mother.jpg"
];

var names = 
[
    "Family Book", 
    "Ranbir Singh", 
    "Diljeet Singh", 
    "Rocky Singh", 
    "Alia Singh", 
    "Soin Sing"
];

var i = 0;
function update()
{
    i++;
    var numbers_of_family_members_in_array = 5
    if(i > numbers_of_family_members_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}