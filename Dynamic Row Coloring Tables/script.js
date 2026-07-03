let boxes = Array.from(document.getElementsByClassName("container")) 
console.log(boxes);
for(let i=0;i<boxes.length;i++)
{
    if((i+1)%2==0)
    {
        boxes[i].style.backgroundColor='lime';
    }
    if(i==0)
    {
        boxes[i].style.backgroundColor='blue';
    }
    if(i==(boxes.length-1))
    {
        boxes[i].style.backgroundColor='palevioletred';
    }
    if(i==8)
    {
        boxes[i].style.backgroundColor='green';
    }
}