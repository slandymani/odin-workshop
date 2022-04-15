package cli

import (
	"context"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/slandymani/odin-workshop/x/oracle/types"
	"github.com/spf13/cobra"
)

// CmdRandomNumbersResult queries request result by reqID
func CmdRandomNumbersResult() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "random-numbers-result [request-id]",
		Short: "Query the RandomNumbers result data by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}
			id, err := strconv.ParseInt(args[0], 10, 64)
			if err != nil {
				return err
			}
			queryClient := types.NewQueryClient(clientCtx)
			r, err := queryClient.RandomNumbersResult(context.Background(), &types.QueryRandomNumbersRequest{RequestId: id})
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(r)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

// CmdLastRandomNumbersID queries latest request
func CmdLastRandomNumbersID() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "last-random-numbers-id",
		Short: "Query the last request id returned by RandomNumbers ack packet",
		Args:  cobra.NoArgs,
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}
			queryClient := types.NewQueryClient(clientCtx)
			r, err := queryClient.LastRandomNumbersId(context.Background(), &types.QueryLastRandomNumbersIdRequest{})
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(r)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
