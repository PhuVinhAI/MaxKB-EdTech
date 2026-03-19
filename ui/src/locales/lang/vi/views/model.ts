export default {
  title: 'Mô hình',
  provider: 'Nhà cung cấp',
  providerPlaceholder: 'Chọn nhà cung cấp',
  addModel: 'Thêm mô hình',

  delete: {
    confirmTitle: 'Xóa mô hình：',
    confirmMessage:
      'Xóa mô hình sẽ ảnh hưởng đến các tài nguyên hiện đang sử dụng nó. Vui lòng thận trọng.',
    resourceCountMessage: 'Mô hình này liên kết với {count} tài nguyên và sẽ không khả dụng sau khi xóa. Vui lòng thận trọng.',
  },
  tip: {
    createSuccessMessage: 'Đã tạo mô hình thành công',
    createErrorMessage: 'Có lỗi trong thông tin cơ bản',
    errorMessage: 'Biến đã tồn tại: ',
    emptyMessage1: 'Vui lòng chọn loại mô hình và mô hình cơ sở trong thông tin cơ bản trước',
    emptyMessage2: 'Mô hình đã chọn không hỗ trợ thiết lập tham số',
    updateSuccessMessage: 'Đã cập nhật mô hình thành công',
    saveSuccessMessage: 'Đã lưu tham số mô hình thành công',
    downloadError: 'Tải về thất bại',
    noModel: 'Mô hình không tồn tại trong Ollama',
  },
  modelType: {
    allModel: 'Tất cả mô hình',
    publicModel: 'Mô hình công khai',
    privateModel: 'Mô hình riêng tư',
    LLM: 'LLM',
    EMBEDDING: 'Mô hình Embedding',
    RERANKER: 'Rerank',
    STT: 'Chuyển giọng nói thành văn bản (Speech2Text)',
    TTS: 'Tổng hợp giọng nói (TTS)',
    IMAGE: 'Mô hình thị giác (Vision)',
    TTI: 'Tạo hình ảnh',
    TTV: 'Văn bản thành Video',
    ITV: 'Hình ảnh thành Video',
  },
  modelForm: {
    title: {
      baseInfo: 'Thông tin cơ bản',
      advancedInfo: 'Cài đặt nâng cao',
      modelParams: 'Tham số mô hình',
      paramSetting: 'Cài đặt tham số mô hình',
      apiParamPassing: 'Tham số giao diện (API)',
    },
    modeName: {
      label: 'Tên mô hình',
      placeholder: 'Đặt tên cho mô hình cơ sở',
      tooltip: 'Tên mô hình tùy chỉnh trong MaxKB',
      requiredMessage: 'Tên mô hình không được để trống',
    },
    permissionType: {
      label: 'Quyền hạn',
      privateDesc: 'Chỉ khả dụng cho người dùng hiện tại',
      publicDesc: 'Khả dụng cho tất cả người dùng',
      requiredMessage: 'Quyền hạn không được để trống',
    },
    model_type: {
      label: 'Loại mô hình',
      placeholder: 'Chọn một loại mô hình',
      tooltip1: 'LLM: Một mô hình suy luận cho trò chuyện AI trong agent.',
      tooltip2: 'Mô hình Embedding: Một mô hình để vector hóa nội dung tài liệu trong kiến thức.',
      tooltip3: 'Speech2Text: Một mô hình được sử dụng để nhận dạng giọng nói trong agent.',
      tooltip4: 'TTS: Một mô hình được sử dụng để tổng hợp giọng nói trong agent.',
      tooltip5:
        'Rerank: Một mô hình được sử dụng để sắp xếp lại các đoạn ứng viên khi sử dụng gọi lại đa lộ trình trong agent quy trình nâng cao.',
      tooltip6:
        'Mô hình Thị giác: Một mô hình thị giác được sử dụng để hiểu hình ảnh trong agent quy trình nâng cao.',
      tooltip7:
        'Tạo hình ảnh: Một mô hình thị giác được sử dụng để tạo hình ảnh trong agent quy trình nâng cao.',
      tooltip8:
        'Văn bản thành Video: Một mô hình thị giác được sử dụng để tạo video từ văn bản trong agent.',
      tooltip9:
        'Hình ảnh thành Video: Một mô hình thị giác được sử dụng để tạo video từ hình ảnh trong agent.',
      requiredMessage: 'Loại mô hình không được để trống',
    },
    base_model: {
      label: 'Mô hình gốc',
      tooltip: 'Đối với các mô hình không có trong danh sách, hãy nhập tên mô hình và nhấn Enter',
      placeholder: 'Nhập tên mô hình gốc và nhấn Enter để thêm',
      requiredMessage: 'Mô hình gốc không được để trống',
    },
  },
  download: {
    downloading: 'Đang tải về...',
    cancelDownload: 'Hủy tải về',
  },
}
