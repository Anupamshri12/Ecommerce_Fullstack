using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace WebApplication1.Filter
{
    public class PostLoginFilter: IOperationFilter
    {
        public void Apply(OpenApiOperation operation ,OperationFilterContext context)
        {
            if(context.ApiDescription.RelativePath != null && context.ApiDescription.RelativePath.Contains("postlogin", StringComparison.OrdinalIgnoreCase))
            {
                operation.Parameters.Add(new OpenApiParameter()
                {
                    Name="JWT-Token",
                    In = ParameterLocation.Header,
                    Required = true,
                    Schema = new OpenApiSchema { Type = "string" },
                    Description = "Auth token for post-login"

                });
            }
        }
    }
}
