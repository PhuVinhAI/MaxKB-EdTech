export default {
  title: 'Công cụ',
  all: 'Tất cả',
  createTool: 'Tạo công cụ',
  editTool: 'Sửa công cụ',
  copyTool: 'Sao chép công cụ',
  importTool: 'Nhập công cụ',
  settingTool: 'Cài đặt công cụ',
  updatedVersion: 'Phiên bản đã cập nhật',
  dataSource: {
    title: 'Nguồn dữ liệu',
    createDataSource: 'Tạo nguồn dữ liệu',
    editDataSource: 'Sửa nguồn dữ liệu',
    copyDataSource: 'Sao chép nguồn dữ liệu',
    selectDataSource: 'Chọn nguồn dữ liệu',
    requiredMessage: 'Vui lòng chọn nguồn dữ liệu',
  },
  toolStore: {
    title: 'Cửa hàng công cụ',
    createFromToolStore: 'Tạo từ Cửa hàng công cụ',
    internal: 'Tích hợp hệ thống',
    recommend: 'Được đề xuất',
    webSearch: 'Tìm kiếm Web',
    databaseQuery: 'Truy vấn cơ sở dữ liệu',
    image: 'Hình ảnh',
    developer: 'Nhà phát triển',
    communication: 'Giao tiếp',
    searchResult: '{count} kết quả tìm kiếm cho',
    confirmTip: 'Bạn có chắc chắn muốn cập nhật công cụ: ',
    updateStoreToolMessage: 'Cập nhật công cụ có thể ảnh hưởng đến các tài nguyên đang sử dụng, hãy thận trọng.',
  },
  mcp: {
    title: 'Dịch vụ MCP',
    label: 'Cấu hình máy chủ MCP',
    placeholder: 'Vui lòng nhập cấu hình máy chủ MCP',
    tip: 'Chỉ hỗ trợ các phương thức gọi SSE và Streamable HTTP',
    requiredMessage: 'Vui lòng nhập cấu hình máy chủ MCP',
    createMcpTool: 'Tạo MCP',
    editMcpTool: 'Sửa MCP',
    copyMcpTool: 'Sao chép MCP',
    mcpConfig: 'Cấu hình dịch vụ MCP',
  },
  skill: {
    title: 'Khả năng',
    copySkillTool: 'Sao chép kỹ năng',
    createSkillTool: 'Tạo kỹ năng',
    editSkillTool: 'Sửa kỹ năng',
    initParamPlaceholder: 'Các tham số cần cấu hình khi bật kỹ năng',
    skillFile: 'Tệp kỹ năng',
    reUpload: 'Tải lên lại',
  },
  tip: {
    saveMessage: 'Các thay đổi chưa lưu sẽ bị mất. Bạn có chắc chắn muốn thoát không?',
  },
  delete: {
    confirmTitle: 'Xác nhận xóa công cụ:',
    confirmMessage:
      'Xóa công cụ này sẽ gây ra lỗi trong agent tham chiếu nó khi chúng được truy vấn. Vui lòng thận trọng.',
    resourceCountMessage:
      'Công cụ này liên kết với {count} tài nguyên và sẽ không khả dụng sau khi xóa. Vui lòng thận trọng.',
  },
  disabled: {
    confirmTitle: 'Xác nhận vô hiệu hóa công cụ:',
    confirmMessage:
      'Vô hiệu hóa công cụ này sẽ gây ra lỗi trong agent tham chiếu nó khi chúng được truy vấn. Vui lòng thận trọng.',
  },

  form: {
    toolName: {
      name: 'Tên công cụ',
      placeholder: 'Vui lòng nhập tên công cụ',
      requiredMessage: 'Vui lòng nhập tên công cụ',
    },
    mcpName: {
      name: 'Tên MCP',
      placeholder: 'Vui lòng nhập tên MCP',
      requiredMessage: 'Vui lòng nhập tên MCP',
    },
    paramName: {
      label: 'Tên tham số',
      placeholder: 'Vui lòng nhập tên tham số',
      requiredMessage: 'Vui lòng nhập tên tham số',
    },
    dataType: {
      label: 'Loại dữ liệu',
    },
    source: {
      label: 'Nguồn',
      reference: 'Tham số tham chiếu',
    },
    param: {
      paramInfo1: 'Hiển thị khi sử dụng công cụ',
      paramInfo2: 'Không hiển thị khi sử dụng công cụ',
      code: 'Nội dung (Python)',
      selectPlaceholder: 'Vui lòng chọn tham số',
      inputPlaceholder: 'Vui lòng nhập giá trị tham số',
    },
    debug: {
      run: 'Chạy',
      output: 'Đầu ra',
      runResult: 'Kết quả chạy',
      runSuccess: 'Thành công',
      runFailed: 'Chạy thất bại',
    },
  },
}
