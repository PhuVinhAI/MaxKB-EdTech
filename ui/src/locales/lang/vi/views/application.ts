export default {
  title: 'Agent',
  createApplication: 'Tạo Agent đơn giản',
  createWorkFlowApplication: 'Tạo Agent quy trình (Workflow)',
  importApplication: 'Nhập Agent',
  copyApplication: 'Sao chép Agent',
  simple: 'ĐƠN GIẢN',
  senior: 'QUY TRÌNH',
  simpleAgent: 'Agent đơn giản',
  AdvancedAgent: 'Agent nâng cao',
  simplePlaceholder: 'Xây dựng nhanh các agent thông minh với các chức năng cơ bản thông qua cài đặt biểu mẫu',
  advancedPlaceholder:
    'Sử dụng các phương pháp kéo thả low-code, linh hoạt sắp xếp các logic phức tạp và các agent giàu tính năng',
  appTest: 'Xem trước gỡ lỗi',
  operation: {
    addModel: 'Thêm mô hình',
    toChat: 'Trò chuyện',
  },
  delete: {
    confirmTitle: 'Bạn có chắc chắn muốn xóa agent này không: ',
    confirmMessage:
      'Xóa agent này sẽ không còn cung cấp dịch vụ của nó nữa. Vui lòng thận trọng.',
    resourceCountMessage:
      'Agent này có liên quan đến {count} tài nguyên và sẽ không khả dụng sau khi xóa. Vui lòng thận trọng.',
  },
  tip: {
    publishSuccess: 'Đã xuất bản thành công',
    ExportError: 'Xuất thất bại',
    professionalMessage:
      'Phiên bản Cộng đồng hỗ trợ tối đa 5 agent. Nếu bạn cần nhiều agent hơn, vui lòng nâng cấp lên phiên bản Chuyên nghiệp.',
    saveErrorMessage: 'Lưu thất bại, vui lòng kiểm tra đầu vào của bạn hoặc thử lại sau',
    loadingErrorMessage: 'Tải cấu hình thất bại, vui lòng kiểm tra đầu vào của bạn hoặc thử lại sau',
    noDocPermission: 'Không có quyền tạo tài liệu',
    confirmUse: 'Bạn có chắc chắn muốn sử dụng không',
    overwrite: 'ghi đè lên quy trình hiện tại',
  },

  form: {
    appName: {
      placeholder: 'Vui lòng nhập tên agent',
      requiredMessage: 'Tên agent là bắt buộc',
    },
    appDescription: {
      placeholder:
        'Mô tả kịch bản và mục đích sử dụng Agent, ví dụ: Trợ lý XXX trả lời các câu hỏi của người dùng về cách sử dụng sản phẩm XXX',
    },
    appType: {
      simplePlaceholder: 'Thích hợp cho người mới bắt đầu để tạo trợ lý.',
      workflowPlaceholder: 'Thích hợp cho người dùng nâng cao để tùy chỉnh quy trình của trợ lý',
    },
    appTemplate: {
      blankApp: {
        title: 'Agent trống',
      },
      assistantApp: {
        title: 'Trợ lý tri thức',
        description: 'Thích hợp cho người dùng nâng cao để tùy chỉnh quy trình của trợ lý',
      },
    },
    aiModel: {
      label: 'Mô hình AI',
      placeholder: 'Vui lòng chọn một mô hình AI',
    },
    roleSettings: {
      label: 'Lời nhắc hệ thống',
      placeholder:
        'Lời nhắc hệ thống, bạn có thể tham chiếu các biến trong hệ thống: {data} là đoạn khớp trong cơ sở kiến thức; {question} là câu hỏi do người dùng đặt ra.',
      tooltip: 'Thiết lập vai trò hoặc hướng dẫn để mô hình tuân theo',
    },

    prompt: {
      label: 'Lời nhắc người dùng',
      noReferences: '（Không có tham chiếu Kiến thức）',
      references: ' (Có tham chiếu Kiến thức)',
      placeholder:
        'Lời nhắc người dùng, bạn có thể tham chiếu các biến trong hệ thống: {data} là đoạn khớp trong cơ sở kiến thức; {question} là câu hỏi do người dùng đặt ra',
      requiredMessage: 'Vui lòng nhập lời nhắc người dùng',
      tooltip: 'Câu hỏi hoặc lệnh mà người dùng đưa ra cho mô hình',

      noReferencesTooltip:
        'Bằng cách điều chỉnh nội dung của lời nhắc, bạn có thể hướng dẫn hướng trò chuyện của mô hình lớn. Lời nhắc này sẽ được cố định ở đầu ngữ cảnh. Các biến sử dụng: {question} là câu hỏi do người dùng đặt ra.',
      referencesTooltip:
        'Bằng cách điều chỉnh nội dung của lời nhắc, bạn có thể hướng dẫn hướng trò chuyện của mô hình lớn. Lời nhắc này sẽ được cố định ở đầu ngữ cảnh. Các biến sử dụng: {data} mang thông tin đã biết từ kiến thức; {question} là câu hỏi do người dùng đặt ra.',
      defaultPrompt: `Thông tin đã biết: {data}
        Câu hỏi: {question}
         Yêu cầu phản hồi:
         - Vui lòng sử dụng ngôn ngữ súc tích và chuyên nghiệp để trả lời câu hỏi của người dùng.
         `,
    },
    historyRecord: {
      label: 'Lịch sử trò chuyện',
    },
    relatedKnowledge: {
      label: 'Kiến thức liên quan',
      placeholder: 'Kiến thức liên quan được hiển thị ở đây',
    },
    multipleRoundsDialogue: 'Đối thoại nhiều vòng',

    prologue: 'Lời mở đầu',
    defaultPrologue:
      'Xin chào, tôi là trợ lý XXX. Bạn có thể đặt câu hỏi cho tôi về việc sử dụng XXX.\n- Các tính năng chính của XXX là gì?\n- XXX hỗ trợ những LLM nào?\n- XXX hỗ trợ những loại tài liệu nào?',
    problemOptimization: {
      label: 'Tối ưu hóa câu hỏi',
      tooltip:
        'Tối ưu hóa câu hỏi hiện tại dựa trên lịch sử trò chuyện để khớp tốt hơn với các điểm kiến thức.',
    },

    voiceInput: {
      label: 'Đầu vào giọng nói',
      placeholder: 'Vui lòng chọn mô hình nhận dạng giọng nói',
      requiredMessage: 'Vui lòng chọn mô hình đầu vào giọng nói',
      autoSend: 'Tự động gửi',
    },
    voicePlay: {
      label: 'Phát lại giọng nói',
      placeholder: 'Vui lòng chọn mô hình tổng hợp giọng nói',
      requiredMessage: 'Vui lòng chọn mô hình phát lại giọng nói',
      autoPlay: 'Tự động phát lại',
      browser: 'Phát lại qua trình duyệt (miễn phí)',
      tts: 'Mô hình TTS',
      listeningTest: 'Xem trước',
    },
    reasoningContent: {
      label: 'Đầu ra suy nghĩ',
      tooltip:
        "Vui lòng thiết lập nhãn suy nghĩ dựa trên phản hồi của mô hình, nội dung ở giữa nhãn sẽ được nhận dạng là quá trình suy nghĩ.",
      start: 'Bắt đầu',
      end: 'Kết thúc',
    },
    mcp_output_enable: 'Hiển thị quá trình thực thi',
  },
  generateDialog: {
    label: 'Tạo',
    generatePrompt: 'Tạo lời nhắc',
    placeholder: 'Vui lòng nhập chủ đề lời nhắc',
    title: 'Lời nhắc được hiển thị ở đây',
    remake: 'Tạo lại',
    stop: 'Dừng tạo',
    continue: 'Tiếp tục tạo',
    replace: 'Thay thế',
    exit: 'Bạn có chắc chắn muốn thoát và hủy bỏ nội dung do AI tạo ra không?',
    loading: 'Đang tạo...',
  },
  dialog: {
    addKnowledge: 'Thêm kiến thức liên quan',
    addKnowledgePlaceholder: 'Kiến thức được chọn phải sử dụng cùng một mô hình embedding',
    selectSearchMode: 'Chế độ truy xuất',
    vectorSearch: 'Tìm kiếm Vector',
    vectorSearchTooltip:
      'Tìm kiếm vector là một phương pháp truy xuất dựa trên tính toán khoảng cách vector, phù hợp với khối lượng dữ liệu lớn trong kiến thức.',
    fullTextSearch: 'Tìm kiếm toàn văn',
    fullTextSearchTooltip:
      'Tìm kiếm toàn văn là một phương pháp truy xuất dựa trên độ tương đồng văn bản, phù hợp với khối lượng dữ liệu nhỏ trong kiến thức.',
    hybridSearch: 'Tìm kiếm kết hợp (Hybrid)',
    hybridSearchTooltip:
      'Tìm kiếm kết hợp là một phương pháp truy xuất dựa trên cả độ tương đồng vector và văn bản, phù hợp với khối lượng dữ liệu trung bình trong kiến thức.',
    similarityThreshold: 'Độ tương đồng cao hơn',
    similarityTooltip: 'Độ tương đồng càng cao, mối tương quan càng mạnh.',
    topReferences: 'Top N đoạn',
    maxCharacters: 'Số ký tự tối đa mỗi tham chiếu',
    noReferencesAction: 'Khi không có tham chiếu kiến thức',
    continueQuestioning: 'Tiếp tục đặt câu hỏi cho mô hình AI',
    provideAnswer: 'Chỉ định nội dung phản hồi',
    designated_answer:
      'Xin chào, tôi là trợ lý XXX. Kiến thức của tôi chỉ chứa thông tin liên quan đến các sản phẩm của XXX. Vui lòng đặt lại câu hỏi của bạn.',
    defaultPrompt1:
      "Nội dung bên trong dấu ngoặc đơn () đại diện cho câu hỏi của người dùng. Dựa trên ngữ cảnh, vui lòng suy đoán và hoàn thiện câu hỏi của người dùng ({question}). Yêu cầu là xuất ra câu hỏi đã hoàn thiện và đặt nó trong",
    defaultPrompt2: 'tag',
  },
  applicationAccess: {
    title: 'Truy cập bên thứ ba',
    wecom: 'WeCom',
    wecomTip: 'Tạo Agent WeCom',
    wecomBot: 'Bot WeCom',
    wecomBotTip: 'Tạo Bot thông minh WeCom',
    dingtalk: 'DingTalk',
    dingtalkTip: 'Tạo Agent DingTalk',
    wechat: 'WeChat',
    wechatTip: 'Tạo Agent WeChat',
    lark: 'Lark',
    larkTip: 'Tạo Agent Lark',
    setting: 'Cài đặt',
    callback: 'Địa chỉ Callback',
    callbackTip: 'Vui lòng điền địa chỉ callback',
    wecomPlatform: 'Nền tảng mở WeCom',
    wechatPlatform: 'Nền tảng mở WeChat',
    dingtalkPlatform: 'Nền tảng mở DingTalk',
    larkPlatform: 'Nền tảng mở Lark',
    slack: 'Slack',
    slackTip: 'Tạo Agent Slack',
    wecomSetting: {
      title: 'Cấu hình WeCom',
      cropId: 'Crop ID',
      cropIdPlaceholder: 'Vui lòng nhập crop ID',
      agentIdPlaceholder: 'Vui lòng nhập agent ID',
      secretPlaceholder: 'Vui lòng nhập secret',
      tokenPlaceholder: 'Vui lòng nhập token',
      encodingAesKeyPlaceholder: 'Vui lòng nhập EncodingAESKey',
      authenticationSuccessful: 'Thành công',
      urlInfo:
        '-Quản lý APP-Tự xây dựng-APP đã tạo-Nhận tin nhắn-Thiết lập "URL" nhận bởi API',
    },
    dingtalkSetting: {
      title: 'Cấu hình DingTalk',
      clientIdPlaceholder: 'Vui lòng nhập client ID',
      clientSecretPlaceholder: 'Vui lòng nhập client secret',
      urlInfo:
        '-Trên trang robot, hãy thiết lập "Chế độ nhận tin nhắn" thành chế độ HTTP và điền URL trên vào "Địa chỉ nhận tin nhắn"',
    },
    wechatSetting: {
      title: 'Cấu hình WeChat',
      appId: 'APP ID',
      appIdPlaceholder: 'Vui lòng nhập APP ID',
      appSecret: 'APP SECRET',
      appSecretPlaceholder: 'Vui lòng nhập APP SECRET',
      token: 'TOKEN',
      tokenPlaceholder: 'Vui lòng nhập TOKEN',
      aesKey: 'Khóa mã hóa tin nhắn',
      aesKeyPlaceholder: 'Vui lòng nhập khóa mã hóa tin nhắn',
      urlInfo:
        '-Cài đặt và Phát triển-Cấu hình cơ bản-"URL địa chỉ máy chủ" trong cấu hình máy chủ',
    },
    wecomBotSetting: {
      title: 'Cấu hình Bot WeCom',
      urlInfo: '-Công cụ quản lý-Bot thông minh-Tạo Bot-Chế độ API Tạo "URL"',
    },
    larkSetting: {
      title: 'Cấu hình Lark',
      appIdPlaceholder: 'Vui lòng nhập APP ID',
      appSecretPlaceholder: 'Vui lòng nhập APP secret',
      verificationTokenPlaceholder: 'Vui lòng nhập token xác thực',
      urlInfo:
        '-Sự kiện và callback - cấu hình sự kiện - cấu hình "địa chỉ yêu cầu" của phương thức đăng ký',
    },
    slackSetting: {
      title: 'Cấu hình Slack',
      signingSecretPlaceholder: 'Vui lòng nhập signing secret',
      botUserTokenPlaceholder: 'Vui lòng nhập bot user token',
    },
    copyUrl: 'Sao chép liên kết và điền vào',
  },
  hitTest: {
    title: 'Kiểm tra truy xuất',
    text: 'Kiểm tra hiệu quả khớp của Kiến thức dựa trên văn bản truy vấn đã cho.',
    emptyMessage1: 'Kết quả kiểm tra truy xuất sẽ hiển thị ở đây',
    emptyMessage2: 'Không tìm thấy đoạn văn nào phù hợp',
  },
  publishTime: 'Thời gian xuất bản',
  publishStatus: 'Trạng thái xuất bản',
}
