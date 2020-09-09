function size($x, $element, $direction)
{
    $x++;
    if ($direction == 'row') $element.style.width = $x + 'px';
    if ($direction == 'culumn') $element.style.height = $x + 'px';
    
}