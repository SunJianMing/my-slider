# AUTO GENERATED FILE - DO NOT EDIT

mySlider <- function(id=NULL, picUrl=NULL, step=NULL, value=NULL, range=NULL, width=NULL, setTimeShow=NULL, typeSite=NULL, height=NULL) {
    
    props <- list(id=id, picUrl=picUrl, step=step, value=value, range=range, width=width, setTimeShow=setTimeShow, typeSite=typeSite, height=height)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'MySlider',
        namespace = 'my_slider',
        propNames = c('id', 'picUrl', 'step', 'value', 'range', 'width', 'setTimeShow', 'typeSite', 'height'),
        package = 'mySlider'
        )

    structure(component, class = c('dash_component', 'list'))
}
