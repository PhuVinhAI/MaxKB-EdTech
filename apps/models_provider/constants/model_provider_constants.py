# coding=utf-8
from enum import Enum

from models_provider.impl.anthropic_model_provider.anthropic_model_provider import AnthropicModelProvider
from models_provider.impl.aws_bedrock_model_provider.aws_bedrock_model_provider import BedrockModelProvider
from models_provider.impl.azure_model_provider.azure_model_provider import AzureModelProvider
from models_provider.impl.docker_ai_model_provider.docker_ai_model_provider import DockerModelProvider
from models_provider.impl.gemini_model_provider.gemini_model_provider import GeminiModelProvider
from models_provider.impl.local_model_provider.local_model_provider import LocalModelProvider
from models_provider.impl.ollama_model_provider.ollama_model_provider import OllamaModelProvider
from models_provider.impl.openai_model_provider.openai_model_provider import OpenAIModelProvider
from models_provider.impl.regolo_model_provider.regolo_model_provider import RegoloModelProvider
from models_provider.impl.vllm_model_provider.vllm_model_provider import VllmModelProvider
from models_provider.impl.xinference_model_provider.xinference_model_provider import XinferenceModelProvider


class ModelProvideConstants(Enum):
    model_azure_provider = AzureModelProvider()
    model_ollama_provider = OllamaModelProvider()
    model_openai_provider = OpenAIModelProvider()
    model_docker_ai_provider = DockerModelProvider()
    model_gemini_provider = GeminiModelProvider()
    model_aws_bedrock_provider = BedrockModelProvider()
    model_local_provider = LocalModelProvider()
    model_xinference_provider = XinferenceModelProvider()
    model_vllm_provider = VllmModelProvider()
    model_anthropic_provider = AnthropicModelProvider()
    model_regolo_provider = RegoloModelProvider()
