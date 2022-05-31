### useEffect
- useEffect: sử dụng khi cần thực hiện 1 hành động nào đó khi component được render lần đầu tiên và khi component được render lại
3 kiểu sử dụng:
- useEffect không sử dụng dependency: render lần đầu tiên và render lại khi có thay đổi
- useEffect sử dụng dependency: render lần đầu tiên và render lại khi dependency thay đổi
- useEffect sử dụng dependency là 1 mảng rỗng: render 1 lần
<!-- ! sử dụng clearInterval khi component bị unmount -->
### useState
- useState: sử dụng để lưu trữ giá trị của 1 biến